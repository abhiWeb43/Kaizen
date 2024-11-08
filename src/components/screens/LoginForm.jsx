import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [errorMsg, setErrorMsg] = useState(''); // State for error messages
  const navigate = useNavigate(); // For redirection after successful login

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to /login endpoint
      let result = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }), // Send email and password
        headers: {
          'Content-Type': 'application/json',
        },
      });

      result = await result.json(); // Parse the response JSON

      if (result.token && result.user) {
        // Store the token and username in localStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', result.user.username); // Store username

        alert('Login successful!');

        // Clear form fields
        setEmail('');
        setPassword('');

        // Redirect to the home page after successful login
        navigate('/user');
      } else {
        setErrorMsg(result.msg || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <form className="all-form login-form" onSubmit={handleOnSubmit}>
      <div className="form-element">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          required
        />
      </div>
      <div className="form-element">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          required
        />
      </div>

      {errorMsg && <p className="error-msg">{errorMsg}</p>} {/* Show error message if login fails */}

      <button type="submit" name="login" value="login">Log In</button>

      <div className="login-footer">
        <Link to="/">
          <span>Forgot Password?</span>
        </Link>
        <Link to="/register">
          <span>Sign Up</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
