const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');


exports.register = async (req, res) => {
  const { first_name, last_name, email, password, phone_number, address, profile_picture, date_of_birth } = req.body;

  // Validate required fields
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ error: 'First name, last name, email, and password are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await db('Users').where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database with the hashed password
    const [newUser] = await db('Users').insert({
      
      first_name,
      last_name,
      email,
      password: hashedPassword, // Store the hashed password
      phone_number,
      address,
      profile_picture,
      date_of_birth,
    }).returning('*');

    // Generate a JWT token for the new user
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.SESSION_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );

    // Set the token in cookies
    res.cookie('token', token, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000 // Cookie expiration time (1 hour)
    });

    // Respond with success message
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
       
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        phone_number: newUser.phone_number,
        address: newUser.address,
        profile_picture: newUser.profile_picture,
        date_of_birth: newUser.date_of_birth,
      },
    });
  } catch (error) {
    console.error('Registration error:', error); // Debugging output
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Find the user by email
    const user = await db('Users').where({ email }).first();
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the plain text password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SESSION_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );

    // Set the token in cookies
    res.cookie('token', token, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000 // Cookie expiration time (1 hour)
    });

    // Respond with success message and user info
    res.status(200).json({
      message: 'Login successful',
      token ,
      user: {
        id: user.id,
        
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getUserById = async (req, res) => {
  const { id } = req.params; // Get the user ID from the request parameters

  try {
    // Query the Users table for the user with the given ID
    const user = await db('Users').where({ id }).first();

    // Check if the user was found
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with the user data (excluding the password for security)
    const { password, ...userData } = user; // Exclude the password field
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Initiate Google Authentication
exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Handle Google Auth Callback
exports.googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: '/dashboard', // Redirect after successful login
});

exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// usersController.js

// Controller to update user information
exports.updateUserInfo = async (req, res) => {
  const { id } = req.params; // User ID from the request parameters
  const {
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address,
    profile_picture,
    date_of_birth,
  } = req.body; // New user information from the request body

  try {
    // Validate the required fields
    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Update the user information in the database
    const updatedUser = await db('Users')
      .where({ id })
      .update({
        first_name,
        last_name,
        email,
        password,
        phone_number,
        address,
        profile_picture,
        date_of_birth,
        updated_at: db.fn.now(), // Update the timestamp
      })
      .returning('*'); // Return the updated row

    if (updatedUser.length) {
      // User updated successfully
      return res.status(200).json({ message: 'User information updated successfully', user: updatedUser[0] });
    } else {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user information:', error);
    return res.status(500).json({ message: 'An error occurred while updating user information', error });
  }
};
