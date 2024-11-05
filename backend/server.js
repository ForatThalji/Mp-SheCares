const express = require('express');
const db = require('./config/db'); 
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
require('./passport-setup');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const productsRoutes = require('./routes/productsRoutes');
const passport = require('passport');
const choicesRoutes = require('./routes/choicesRoutes');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const expertsRoutes = require('./routes/expertsRoutes'); // Adjust path accordingly
const testRoutes = require('./routes/testRoutes'); // Adjust path accordingly
const answersRoutes = require('./routes/answersRoutes'); // Adjust path accordingly
const cartRoutes = require('./routes/cartRoutes');
const contactRoutes = require('./routes/contactRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const handmadeRoutes = require('./routes/handmadeRoutes');
const checkout = require('./routes/checkoutRoutes');

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Use "live" for production
  client_id: "AYnzVEObmnyuNDN4FBPKSqinCbKh7UwO3m5qeUkH6R6wknTw0ECuqp63tmy714ZzsyutrUTHELbmbD9W",
  client_secret: "ENEhzbIZTHMsoUmLJFfpGx7ILdvpXSe7IWhyk_yVrdj3mDPlcJQr9AuLhx5pVQvcU5muW-hxl3WrVQT9",
});
const app = express();
const PORT = 3001;
// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsOptions));
app.use(express.json()); 

 app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/choices', choicesRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/answers', answersRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/experts', expertsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/handmade', handmadeRoutes);
app.use('/api/checkout', checkout);



db.raw('SELECT NOW()')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

  app.post("/api/paypal/create-payment", (req, res) => {
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      transactions: [
        {
          amount: {
            currency: "USD",
            total: "100.00", // Replace with dynamic amount
          },
          description: "Payment for your order",
        },
      ],
      redirect_urls: {
        return_url: "http://localhost:3001/success", // Success redirect URL
        cancel_url: "http://localhost:3001/cancel", // Cancel redirect URL
      },
    };
    app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error creating PayPal payment");
      } else {
        res.json({ id: payment.id });
      }
    });
  });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


