const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define routes
router.post('/addmessage', contactController.addMessage); // New route for skin concern
router.get('/getmessage', contactController.getMessages); // New route for skin concern
router.put('/updatemessage/:id', contactController.updateMessageStatus); // New route for skin concern


module.exports = router;
