const db = require('../config/db'); // Knex database instance

// Controller to add a new message
exports.addMessage = async (req, res) => {
  try {
    const { user_id, email, message, status } = req.body;

    // Validate the input
    if (!email || !message) {
      return res.status(400).json({ message: "Email and message are required" });
    }

    // Insert the new message into the 'Contact' table
    const newMessage = await db('Contact').insert({
      user_id: user_id || null,  // This can be optional if no user is logged in
      email,
      message,
      status: status || 'pending',  // Default to 'pending' if not provided
      created_at: new Date()
    });

    // Respond with success message
    return res.status(201).json({
      message: "Message added successfully",
      data: newMessage
    });
  } catch (error) {
    console.error("Error adding message:", error);
    return res.status(500).json({ message: "Error adding message", error });
  }
};


// Controller to get messages from the 'Contact' table
exports.getMessages = async (req, res) => {
  try {
    const { user_id, email, status } = req.query; // Get query parameters for filtering

    // Start building the query
    let query = db('Contact').select('*');

    // Apply filters if provided
    if (user_id) {
      query = query.where('user_id', user_id);
    }
    if (email) {
      query = query.where('email', email);
    }
    if (status) {
      query = query.where('status', status);
    }

    // Execute the query
    const messages = await query;

    // Check if any messages were found
    if (messages.length === 0) {
      return res.status(404).json({ message: 'No messages found' });
    }

    // Respond with the retrieved messages
    return res.status(200).json({ message: 'Messages retrieved successfully', data: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Error fetching messages", error });
  }
};


// Controller to update the status of a message
exports.updateMessageStatus = async (req, res) => {
    try {
      const { id } = req.params; // Message ID from the URL
      const { status } = req.body; // New status from the request body
  
      // Validate inputs
      if (!id) {
        return res.status(400).json({ message: "Message ID is required" });
      }
  
      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }
  
      // Update the status of the message in the database
      const updated = await db('Contact')
        .where({ id })
        .update({ status });
  
      // Check if the message was updated
      if (updated === 0) {
        return res.status(404).json({ message: 'Message not found' });
      }
  
      // Respond with success message
      return res.status(200).json({ message: 'Message status updated successfully' });
    } catch (error) {
      console.error("Error updating message status:", error);
      return res.status(500).json({ message: "Error updating message status", error });
    }
};


