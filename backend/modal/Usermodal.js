const mongoose = require('mongoose');

// Define the schema for User
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the User model
module.exports = mongoose.model('users', UserSchema);
