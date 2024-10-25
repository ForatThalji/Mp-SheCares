const db = require('../config/db'); // تأكد من أن هذا هو المثيل الصحيح لـ Knex


// Controller to get all handmade products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await db('handmade_products').select('*');
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
};

// Controller to get a specific product by ID
exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await db('handmade_products').where({ id: productId }).first();
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Failed to retrieve product' });
  }
};


// دالة لإضافة منتج يدوي جديد
exports.addHandmadeProduct = async (req, res) => {
    const { name, description, price, category, stock_quantity, seller_id } = req.body; // استرجاع البيانات من الطلب

    // تحقق من وجود جميع البيانات الضرورية
    if (!name || !price || !category || stock_quantity === undefined || !seller_id) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    try {
        const newProduct = await db('handmade_products').insert({
            name,
            description,
            price,
            category,
            stock_quantity,
            seller_id,
            created_at: new Date(), // تعيين تاريخ الإنشاء
        });

        return res.status(201).json({
            message: 'Handmade product added successfully',
            productId: newProduct[0], // إرجاع ID المنتج الذي تم إضافته
        });
    } catch (error) {
        console.error('Error adding handmade product:', error);
        return res.status(500).json({
            message: 'Error adding handmade product',
            error: error.message,
        });
    }
};




