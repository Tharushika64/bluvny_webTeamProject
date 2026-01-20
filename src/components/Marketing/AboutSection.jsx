import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">Pioneering the Future of <span className="highlight">Waste Management</span></h2>
        
        <p className="about-subtitle">
          We're on a mission to transform how the world manages waste through innovative robotics, artificial intelligence, and sustainable technology.
        </p>

        <div className="who-we-are-label">Who We Are</div>
        
        <div className="about-cards">
          <div className="about-card mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To revolutionize waste management through innovative robotics, AI integration, and sustainable solutions that benefit communities and the environment. We're committed to making clean, efficient waste collection accessible to organizations of all sizes.
            </p>
          </div>
          
          <div className="about-card vision-card">
            <div className="card-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              A world where waste management is fully autonomous, sustainable, and efficient. We envision intelligent robots that 24/7 monitor cleaner environments, reduce pollution, and create a healthier planet for future generations through continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
