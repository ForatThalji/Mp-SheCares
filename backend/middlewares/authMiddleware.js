
// exports.authenticateToken = (req, res, next) => {
//   const token = req.cookies.token; // الحصول على التوكن من الكوكيز

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied, no token provided.' });
//   }

//   jwt.verify(token, process.env.SESSION_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: 'Invalid token' });
//     }
//     req.user = user; // تخزين معلومات المستخدم في الطلب
//     next(); // الانتقال إلى الدالة التالية
//   });
// };



// const jwt = require('jsonwebtoken');

// exports.verifyToken = (req, res, next) => {
//   const token = req.cookies.token || req.headers['authorization'];

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   try {
//     // فك تشفير التوكن باستخدام نفس المفتاح المستخدم للتشفير
//     const decoded = jwt.verify(token, process.env.SESSION_SECRET);

//     // تخزين الـ user ID في req لتمريره إلى باقي الميثودات
//     req.userId = decoded.id;

//     // الانتقال للميثود التالية
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };






const db = require('../config/db');

exports.authenticateToken = async (req, res, next) => {
  const token = req.cookies.token; // الحصول على التوكن من الكوكيز

  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided.' });
  }

  jwt.verify(token, process.env.SESSION_SECRET, async (err, user) => {
    if (err) {
      const message = err.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token';
      return res.status(403).json({ error: message });
    }

    // هنا يمكنك الاتصال بقاعدة البيانات للتحقق من المستخدم
    try {
      const dbUser = await db('users').where({ id: user.id }).first(); // جلب بيانات المستخدم من قاعدة البيانات

      if (!dbUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      req.user = dbUser; // تخزين بيانات المستخدم في الطلب
      next(); // الانتقال إلى الدالة التالية
    } catch (dbError) {
      return res.status(500).json({ error: 'Database error' });
    }
  });
};
