const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./modal/Usermodal'); // Adjust path as necessary
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, email, number, password } = req.body;

  // Validate input
  if (!username || !email || !number || !password) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      username,
      email,
      number,
      password, // Assuming the password is already encrypted
    });

    // Save user to the database
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).send('Server error');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password without encryption
    if (password !== user.password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and user data (excluding the password)
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Server error');
  }
});

// GET user data endpoint
app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const trimmedId = id.trim();

  try {
    // Find user by ID
    const user = await User.findById(trimmedId).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Start server (only one instance of app.listen)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
