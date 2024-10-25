const db = require('../config/db'); 

// Function to fetch all questions from the database
 exports.getQuestions = async (req, res) => {
    try {
      // Query the Questions table to get all questions
      const questions = await db('Questions').select('*');
      console.log(questions)
      // Send the questions as the response
      res.status(200).json({
        success: true,
        data: questions
      });
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching questions',
        error: error.message
      });
    }
  };
  



