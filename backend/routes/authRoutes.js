// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // تأكد من مسار استيراد authController

// مسار بدء المصادقة باستخدام Google
router.get('/google', authController.googleAuth);

// مسار معالجة رد Google بعد المصادقة
router.get('/google/redirect', authController.googleAuthCallback);

// مسار تسجيل الخروج
router.get('/logout', authController.logout);

module.exports = router;
