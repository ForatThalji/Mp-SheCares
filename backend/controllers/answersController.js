
const db = require('../config/db');

// Function to get choices for a specific question
exports.getChoicesByQuestionId = async (req, res) => {

  const { question_id } = req.params;
  

  try {
    // Query the Choices table for all choices related to the provided question_id
    const choices = await db('Choices')
      .where({ question_id })
      .select('id', 'choice_text', 'mark');

    if (choices.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No choices found for the provided question ID',
      });
    }
    // Return the choices for the specified question
    res.status(200).json({
      success: true,
      data: choices,
    });
  } catch (error) {
    console.error('Error fetching choices:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching choices',
      error: error.message,
    });
  }
};
