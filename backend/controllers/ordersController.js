const db = require('../config/db'); // Ensure db is properly configured

// Function to create a new order
exports.createOrder = async (req, res) => {
    const { user_id, total_price, payment_method } = req.body;

    // Validate the required fields
    if (!user_id || !total_price || !payment_method) {
        return res.status(400).json({
            message: "Missing required fields: user_id, total_price, payment_method"
        });
    }

    try {
        // Insert the order into the 'orders' table and return the newly created order
        const newOrder = await db('orders')
            .insert({
                user_id,
                total_price,
                payment_method,
                order_status: 'pending', // Default order status
                created_at: new Date(),
                updated_at: new Date()
            })
            .returning('*'); // Returns all fields of the inserted row

        // Respond with the created order
        return res.status(201).json({
            message: "Order created successfully",
            order: newOrder[0] // Return the first (and only) inserted order
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Failed to create order",
            error: err.message
        });
    }
};
