const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

// Route to handle POST request for submitting choice
router.get('/answers/:question_id', answersController.getChoicesByQuestionId);

module.exports = router;
