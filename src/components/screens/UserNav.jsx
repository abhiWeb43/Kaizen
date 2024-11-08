import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../assets/images/profile-user.png';

export default function Nav() {

  const [username, setUsername] = useState(''); // State to hold the username
  const navigate = useNavigate();

  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername); // Set the username to state
    }
  }, []); // This will run only once when the component mounts

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1 className="logo">Kaizen</h1>
      </Link>

      <ul className="nav-list">
        <li>
          <Link to="/user" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/blogUser" className="nav-link">Blog</Link>
        </li>
        <li>
          <Link to="/quotesUser" className="nav-link">Quotes</Link>
        </li>
        <li>
          <Link to="/selfHelpUser" className="nav-link">Self-Help</Link>
        </li>
        <li>
          <Link to="/aboutUser" className="nav-link">About</Link>
        </li>
      </ul>

      <div className="user-container">
        {/* Always show the username, fetched from localStorage */}
        <button className="userName" onClick={() => navigate('/settings')}>
          <img className="profile-nav" src={profile} alt="profile" />
        </button>

        <p onClick={() => navigate('/settings')}>{username || 'User'}</p>
      </div>
    </nav>
  );
}
