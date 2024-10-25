const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

// Define routes
router.get('/ques', testController.getQuestions); // New route for skin concern


module.exports = router;