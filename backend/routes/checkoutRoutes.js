const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

// Define routes
router.post('/checkout', checkoutController.createCheckout); // New route for skin concern



module.exports = router;
