const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/getfromcart/:cart_id',cartController.getCartItems);
router.get('/getfromcart/:user_id/items',cartController.getCartItemsForUser);
router.post('/addtocart',cartController.addCartItem);
router.put('/updatecart/:id',cartController.updateCartItem);
router.delete('/delfromcart/:id',cartController.deleteCartItem);

module.exports = router;

