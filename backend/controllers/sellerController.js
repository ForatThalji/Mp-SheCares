const db = require('../config/db'); 
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

exports.addSeller = [

    upload.fields([{ name: 'profile_image' }, { name: 'certificate' }]),
    async (req, res) => {
        const { first_name, last_name, email, password, address, phone_number } = req.body;

        // Validate required fields
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ error: 'First name, last name, email, and password are required' });
        }

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Get file paths from multer upload
            const profileImagePath = req.files?.profile_image ? path.join('uploads', req.files.profile_image[0].filename) : null;
            const certificatePath = req.files?.certificate ? path.join('uploads', req.files.certificate[0].filename) : null;

            // Insert seller data into the database
            const [newSellerId] = await db('Sellers').insert({
                first_name,
                last_name,
                email,
                password: hashedPassword,
                address,
                phone_number,
                profile_image: profileImagePath,
                certificate: certificatePath,
                status: "active",
                created_at: new Date(),
                updated_at: new Date(),
            }).returning('id');

            return res.status(201).json({
                message: 'Seller added successfully',
                sellerId: newSellerId,
            });
        } catch (error) {
            console.error('Error adding seller:', error);
            return res.status(500).json({
                message: 'Error adding seller',
                error: error.message,
            });
        }
    }
];

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

  