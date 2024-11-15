const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define routes
router.post('/addpayment', paymentController.addPayment); // New route for skin concern



module.exports = router;