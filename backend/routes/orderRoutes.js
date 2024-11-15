const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Define routes
router.post('/createorder', ordersController.createOrder); // New route for skin concern



module.exports = router;