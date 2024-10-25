const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/discover',productsController.getAllProducts);
router.get('/discoverbyid/:id',productsController.getProductById);
router.get('/search',productsController.searchProducts);
router.get('/filters',productsController.searchProductsByFilter);
router.get('/alternatives', productsController.getAlternativeProducts);

module.exports = router;