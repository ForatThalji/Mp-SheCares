const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ Knex

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await db('Products').select('*'); // استخدم db بدلاً من knex
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Function to get a product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch the product from the database using Knex
    const product = await db('Products').where({ id }).first();

    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Search function for products
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query; // Get the search query from the request

    // Check if a search query is provided
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    // Search in multiple columns: name, description, skin_type, etc.
    const results = await db('Products')
      .where('name', 'like', `%${query}%`)
      .orWhere('skin_type', 'like', `%${query}%`);

    // Return the search results
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching products' });
  }
};



// Controller to search products based on category and additional filters
exports.searchProductsByFilter = async (req, res) => {
  const { category_id, skin_type, age_range, price_range } = req.query;

  try {
    // Validate if category_id is provided
    if (!category_id) {
      return res.status(400).json({ message: 'Category ID is required.' });
    }

    // Start by filtering products by category_id
    let query = db('Products')
      .select('Products.*', 'Category.name as category_name')
      .leftJoin('Category', 'Products.category_id', 'Category.id')
      .where('Products.category_id', category_id);

    // Optional filter: Skin type
    if (skin_type) {
      query = query.andWhere('Products.skin_type', skin_type);
    }

    // Optional filter: Age range
    if (age_range) {
      const [minAge, maxAge] = age_range.split('-').map(Number);
      query = query.andWhereBetween('Products.age', [minAge, maxAge]);
    }

    // Optional filter: Price range
    if (price_range) {
      const [minPrice, maxPrice] = price_range.split('-').map(Number);
      query = query.andWhereBetween('Products.price', [minPrice, maxPrice]);
    }

    // Execute query
    let products = await query;

    // Check if any products found
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for the selected filters.' });
    }

    // Return the filtered products
    return res.status(200).json({ products });
  } catch (error) {
    console.error('Error searching for products:', error);
    return res.status(500).json({ message: 'An error occurred while searching for products.' });
  }
};



















// // Controller function to fetch alternative products based on category_id and skin type
// exports.getAlternativeProducts = async (req, res) => {
//   const { category_id, skinType } = req.query;

//   try {
//     // Query the database for products with matching category and skin type using Knex
//     const products = await db('Products')
//       .where({
//         category_id: category_id,
//         skin_type: skinType
//       });

//     if (products.length > 0) {
//       res.status(200).json({ success: true, products });
//     } else {
//       res.status(404).json({ success: false, message: 'No alternative products found' });
//     }
//   } catch (error) {
//     console.error('Error fetching alternative products:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

exports.getAlternativeProducts = async (req, res) => {
  const { category_id, skin_type } = req.query;

  console.log('category_id:', category_id, 'skin_type:', skin_type); // Debugging output

  if (!category_id || !skin_type) {
    return res.status(400).json({ error: 'Missing required fields: category_id or skin_type' });
  }

  try {
    const alternativeProducts = await db('Products')
      .where({
        category_id: category_id,
        skin_type: skin_type
      })
      .select('*');

    res.json(alternativeProducts);
  } catch (error) {
    console.error('Error fetching alternative products:', error);
    res.status(500).json({ error: 'Error fetching alternative products' });
  }
};
