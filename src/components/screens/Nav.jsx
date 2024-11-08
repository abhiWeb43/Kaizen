import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">

      <Link to="/">
        <h1 className="logo">Kaizen</h1>
      </Link>

      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li>
          <Link to="/blog" className="nav-link">Blog</Link>
        </li>

        <li>
          <Link to="/quotes" className="nav-link">Quotes</Link>
        </li>

        <li>
          <Link to="/selfHelp" className="nav-link">Self-Help</Link>
        </li>

        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>

      </ul>
      <div>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </nav>
  )
}
