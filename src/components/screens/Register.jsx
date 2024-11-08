import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { username, email, number, password } = formData;

  // Update form data as the user types
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! You can now log in.');
      // Optionally, redirect to login page
      // window.location.href = '/login';
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        console.error('Error registering user:', error.response.data.msg);
        setError(error.response.data.msg);
      } else {
        console.error('Error registering user:', error.message);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <form className="all-form register-form" onSubmit={onSubmit}>
      <div className="form-element">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          pattern="[a-zA-Z0-9]+"
          required
        />
      </div>
      <div className="form-element">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-element">
        <label>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}

          required
        />
      </div>
      <div className="form-element">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <button type="submit">Sign Up</button>
      <div className="login-footer">
        <Link to="/login">
          <span>Already a User?</span>
        </Link>
        <Link to="/login">
          <span>Log In</span>
        </Link>
      </div>
    </form>
  );
};

export default Register;
