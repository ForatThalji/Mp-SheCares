const express = require('express');
const router = express.Router();
const choicesController = require('../controllers/choicesController');

// Route to handle POST request for submitting choice
router.post('/', choicesController.submitChoice);

module.exports = router;
