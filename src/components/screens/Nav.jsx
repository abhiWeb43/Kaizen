import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
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
          <Link to="/" className="nav-link">Blog</Link>
        </li>

        <li>
          <Link to="/quotes" className="nav-link">Quotes</Link>
        </li>

        <li>
          <Link to="/" className="nav-link">Self-Help</Link>
        </li>

        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>

      </ul>
      <div>
        <button>Login</button>
      </div>
    </nav>
  )
}
