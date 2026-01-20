import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="marketing-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>BLUVYN</h4>
            <p>Next-generation autonomous garbage collector robots powered by AI and advanced technology</p>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Team of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2025 Bluvyn Research Clean House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
