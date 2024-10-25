const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.post('/addseller',sellerController.addSeller);
router.get('/getsellers',sellerController.getSellers);


module.exports = router;