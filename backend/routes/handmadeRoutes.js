const express = require('express');
const router = express.Router();
const handmadeController = require('../controllers/handmadeController');

// Define routes
router.get('/gethandmade', handmadeController.getAllProducts); // New route for skin concern
router.get('/gethandmade/:id', handmadeController.getProductById); // New route for skin concern
router.post('/addhandmade', handmadeController.addHandmadeProduct); // New route for skin concern


module.exports = router;
