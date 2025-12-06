import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer top sections */}
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🗺️</span>
              <span className="logo-text">Trip Planner</span>
            </div>
            <p className="footer-desc">
              Plan your trips, organize your itinerary, and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/trips">Trips</Link></li>
            </ul>
          </div>

          {/* Resources / Technologies */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Travel Guides</a></li>
              <li><a href="#">Travel Blogs</a></li>
              
              <li><a href="#">Packing Checklists</a></li>
              <li><a href="#">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section">
            
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Trip Planner. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
