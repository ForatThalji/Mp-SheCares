const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ db


exports.addCartItem = async (req, res) => {
    const { product_id, quantity } = req.body; // Get product_id and quantity from request body
    const { user_id } = req.body; // Get user_id from the request body (retrieved from localStorage on the client)
  
    if (!user_id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    try {
      // Step 1: Find or create a cart for the user
      let cart = await db('Cart').where({ user_id }).first();
  
      if (!cart) {
        // If the cart doesn't exist, create a new cart for the user
        const [newCart] = await db('Cart')
          .insert({ user_id })
          .returning('*');
        cart = newCart;
      }
  
      // Step 2: Check if the item already exists in the user's cart
      const existingItem = await db('cartItems')
        .where({ cart_id: cart.id, product_id })
        .first();
  
      if (existingItem) {
        // If the item exists, update the quantity
        const [updatedItem] = await db('cartItems')
          .where({ id: existingItem.id })
          .update({
            quantity: existingItem.quantity + quantity,
          })
          .returning('*');
  
        return res.status(200).json({
          message: 'Cart item quantity updated successfully',
          item: updatedItem,
        });
      } else {
        // Step 3: If the item doesn't exist, add it to the cart
        const [newItem] = await db('cartItems')
          .insert({
            cart_id: cart.id,
            product_id,
            quantity,
          })
          .returning('*');
  
        return res.status(201).json({
          message: 'Item added to cart successfully',
          item: newItem,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return res.status(500).json({ message: 'Failed to add item to cart' });
    }
  };

// Update a cart item
exports.updateCartItem = async (req, res) => {
    const { id } = req.params; // Get item ID from request parameters
    const { quantity } = req.body;

    try {
        const updatedItem = await db('cartItems')
            .where({ id })
            .update({ quantity })
            .returning('*');

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json({
            message: 'Cart item updated successfully',
            item: updatedItem,
        });
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ message: 'Failed to update cart item' });
    }
};

// Delete a cart item
exports.deleteCartItem = async (req, res) => {
    const { id } = req.params; // Get item ID from request parameters

    try {
        const deletedCount = await db('cartItems').where({ id }).del();

        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ message: 'Failed to delete cart item' });
    }
};

// Get all items in a cart
exports.getCartItems = async (req, res) => {
  const { cart_id } = req.params; // Get cart ID from request parameters

  try {
      // Fetch items in the cart along with their details
      const items = await db('cartItems')
          .where({ cart_id })
          .join('Products', 'cartItems.product_id', '=', 'Products.id')
          .select('cartItems.*', 'Products.name', 'Products.price');

      // Count the number of items
      const itemCount = items.length;

      // Send response with items and count
      res.status(200).json({ itemCount, items });
  } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Failed to fetch cart items' });
  }
};





exports.getCartItemsForUser = async (req, res) => {
  const userId = req.params.user_id; // Assuming you pass the userId as a route parameter
  console.log("user id = "+userId)

  try {
    // Fetch the cart ID for the user
    const cart = await db('Cart').where('user_id', userId).first();
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for this user.' });
    }

    // Fetch cart items for the retrieved cart ID
    const cartItems = await db('cartItems')
      .join('Products', 'cartItems.product_id', '=', 'Products.id')
      .select('cartItems.id', 'Products.name', 'cartItems.quantity', 'Products.price','Products.image_url')
      .where('cartItems.cart_id', cart.id);

    // Return the cart items
    return res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

