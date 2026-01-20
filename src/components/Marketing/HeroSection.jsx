import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Autonomous<br />
            Garbage<br />
            Collection
          </h1>
          <p className="hero-subtitle">Powered by AI</p>
          <p className="hero-description">
            Transform your waste management with intelligent robots that monitor, collect, and optimize garbage collection routes. Reduce costs, improve efficiency, gain operational control, and complete control at your fingertips.
          </p>
          <button 
            className="hero-btn"
            onClick={() => navigate('/select-dashboard')}
          >
            Get Started →
          </button>
        </div>
        
        <div className="hero-image">
          <img src="/src/assets/robot-hero.png" alt="Autonomous Garbage Collection Robot" />
        </div>
      </div>
    </section>
  );
}
