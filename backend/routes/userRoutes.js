const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



// Route for user registration
router.post('/register',userController.register);
router.post('/login', userController.login);
// Google Authentication Route
router.get('/users/google', userController.googleAuth);
router.get('/getusers/:id',userController.getUserById)
// Google Authentication Callback Route
router.get('/users/google/redirect', userController.googleAuthCallback);
router.put('/users/update/:id',userController.updateUserInfo);
// Logout Route
router.get('/logout', userController.logout);
module.exports = router;