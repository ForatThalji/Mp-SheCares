const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ db

// Create a new checkout entry
exports.createCheckout = async (req, res) => {
  try {
    const { user_id, payment_method, card_holder_name, card_number, expiry_date, cvv } = req.body;

    const newCheckout = await db('checkouts').insert({
      user_id,
      payment_method,
      card_holder_name,
      card_number, // Consider encrypting this before saving
      expiry_date,
      cvv, // Consider encrypting this before saving
      created_at: new Date(),
      updated_at: new Date(),
    });

    res.status(201).json({
      message: 'Checkout created successfully',
      checkoutId: newCheckout[0], // Return the ID of the newly created checkout
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create checkout' });
  }
};

// Get all checkouts
exports.getCheckouts = async (req, res) => {
  try {
    const checkouts = await knex('checkouts').select('*');
    res.status(200).json(checkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch checkouts' });
  }
};

// Get a specific checkout by ID
exports.getCheckoutById = async (req, res) => {
  const { id } = req.params;

  try {
    const checkout = await db('checkouts').where({ id }).first();

    if (!checkout) {
      return res.status(404).json({ error: 'Checkout not found' });
    }

    res.status(200).json(checkout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch checkout' });
  }
};

// Update a checkout entry
exports.updateCheckout = async (req, res) => {
  const { id } = req.params;
  const { payment_method, card_holder_name, expiry_date, cvv } = req.body;

  try {
    const updatedCheckout = await db('checkouts')
      .where({ id })
      .update({
        payment_method,
        card_holder_name,
        expiry_date,
        cvv,
        updated_at: new Date(),
      });

    if (!updatedCheckout) {
      return res.status(404).json({ error: 'Checkout not found' });
    }

    res.status(200).json({ message: 'Checkout updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update checkout' });
  }
};

// Delete a checkout entry
exports.deleteCheckout = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCheckout = await db('checkouts').where({ id }).del();

    if (!deletedCheckout) {
      return res.status(404).json({ error: 'Checkout not found' });
    }

    res.status(200).json({ message: 'Checkout deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete checkout' });
  }
};
