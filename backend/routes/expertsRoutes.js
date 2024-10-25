// routes/experts.js
const express = require('express');
const router = express.Router();
const expertsController = require('../controllers/ExpertsController');

// Define routes
router.get('/skin-concern', expertsController.getExpertsBySkinConcern); // New route for skin concern


module.exports = router;
