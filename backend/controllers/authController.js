const passport = require('passport');

// Initiate Google Authentication
exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
 
});

// Handle Google Auth Callback
exports.googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: process.env.FRONTEND_URL || 'http://localhost:5173/Home', 
 
  // Use environment variable if available
});

exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

