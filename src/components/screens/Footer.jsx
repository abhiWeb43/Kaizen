import React from 'react';
import { Link } from 'react-router-dom';
import Katana from '../assets/images/katana.jpg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="katana-img">
                <img src={Katana} alt="katana" />
            </div>

            <footer className="main-footer">

                <div className="footer-h1">
                    <Link to="/">
                        <h1 className="logo">Kaizen</h1>
                    </Link>
                </div>

                <div className="footer-content">
                    <h3>Useful Links</h3>
                    <ul className="footer-list">
                        <li>
                            <Link to="/" className="footer-link">Home</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Blog</Link>
                        </li>

                        <li>
                            <Link to="/quotes" className="footer-link">Quotes</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Self-Help</Link>
                        </li>

                        <li>
                            <Link to="/about" className="footer-link">About</Link>
                        </li>

                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Subscribe</h3>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email" />
                    </div>
                    <button>Send</button>
                </div>

            </footer>
        </footer>

    )
}

export default Footer
