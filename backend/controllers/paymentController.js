const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ Knex

// Function to add a payment
exports.addPayment = async (req, res) => {
  try {
    const { order_id, payment_status, payment_method } = req.body;

    // Validate incoming data
    if (!order_id || !payment_method) {
      return res.status(400).json({ message: 'Order ID and Payment Method are required.' });
    }

    // Insert the payment record into the database
    const [payment] = await db('payments').insert({
      order_id,
      payment_status: payment_status || 'pending', // Default to 'pending' if not provided
      payment_method
    }).returning('*'); // Returning the inserted record

    // Respond with the created payment
    return res.status(201).json({ message: 'Payment added successfully.', payment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to add payment.' });
  }
};
