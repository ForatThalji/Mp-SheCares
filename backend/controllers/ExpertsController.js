// controllers/expertsController.js
const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ Knex

exports.getExpertsBySkinConcern = async (req, res) => {
  const { skinConcern } = req.query; // Retrieve skin concern from query parameters

  if (!skinConcern) {
    return res.status(400).json({ message: 'Skin concern is required' });
  }

  try {
    // Fetch experts based on skin concern
    const experts = await db('Experts')
      .select('id', 'name', 'specialty', 'location', 'profile_picture', 'facebook_url', 'instagram_url', 'whatsapp_url') // Adjust the columns you want to select
      .where('specialty', 'ILIKE', `%${skinConcern}%`); // Use ILIKE for case-insensitive match

    if (experts.length === 0) {
      return res.status(404).json({ message: 'No experts found for the specified skin concern' });
    }

    res.status(200).json(experts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving experts', error });
  }
};


