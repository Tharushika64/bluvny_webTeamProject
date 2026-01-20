import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MarketingHeader.css';

export default function MarketingHeader() {
  const navigate = useNavigate();

  return (
    <header className="marketing-header">
      <div className="header-container">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="Bluvyn Logo" />
          <span>BLUVYN</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <button 
          className="get-started-btn"
          onClick={() => navigate('/select-dashboard')}
        >
          Get Started →
        </button>
      </div>
    </header>
  );
}
