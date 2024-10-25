const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ Knex
const bcrypt = require('bcrypt');

exports.addSeller = async (req, res) => {
    const { first_name, last_name, email, password, address, phone_number } = req.body; // إزالة status من هنا
    const profile_image = req.files?.profile_image;
    const certificate = req.files?.certificate;
    console.log('Request body:', req.body);

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newSeller = await db('Sellers').insert({
            first_name,
            last_name,
            email,
            password: hashedPassword, // استخدم كلمة المرور المشفرة
            address,
            phone_number,
            profile_image, // تأكد من التعامل مع مسارات الملفات بشكل صحيح
            certificate,
            status: "active", // تعيين الحالة كـ "active" بشكل افتراضي
            created_at: new Date(),
            updated_at: new Date(),
        });

        return res.status(201).json({
            message: 'Seller added successfully',
            sellerId: newSeller[0],
        });
    } catch (error) {
        console.error('Error adding seller:', error);
        return res.status(500).json({
            message: 'Error adding seller',
            error: error.message,
        });
    }
};


exports.getSellers = async (req, res) => {
  try {
      const sellers = await db('Sellers').select('*'); // استرجاع جميع البيانات من جدول Sellers
      return res.status(200).json(sellers); // إرجاع البيانات مع حالة نجاح
  } catch (error) {
      console.error('Error fetching sellers:', error);
      return res.status(500).json({
          message: 'Error fetching sellers',
          error: error.message,
      });
  }
};

// دالة لجلب بائع محدد حسب id
exports.getSellers = async (req, res) => {
  try {
      const seller = await db('Sellers'); // البحث عن البائع بناءً على id
      if (!seller) {
          return res.status(404).json({ message: 'Seller not found' }); // إرجاع رسالة خطأ إذا لم يتم العثور على البائع
      }
      return res.status(200).json(seller); // إرجاع بيانات البائع
  } catch (error) {
      console.error('Error fetching seller:', error);
      return res.status(500).json({
          message: 'Error fetching seller',
          error: error.message,
      });
  }
};

  