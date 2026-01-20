import React from 'react';
import './BenefitsSection.css';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: '📉',
      title: 'Reduce Operating Costs by 60%',
      description: 'Automated collection reduces labor costs and optimizes fuel consumption.'
    },
    {
      icon: '⏰',
      title: '24/7 Autonomous Operation',
      description: 'Robots work around the clock without breaks, ensuring continuous waste management.'
    },
    {
      icon: '🌍',
      title: 'Environmentally Friendly',
      description: 'Electric-powered robots reduce carbon emissions by up to 90% compared to traditional methods.'
    },
    {
      icon: '📊',
      title: 'Real-Time Monitoring',
      description: 'Complete visibility and control from anywhere with our cloud-based dashboard.'
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        <a href="#benefits" className="benefits-label">Benefits</a>
        
        <p className="benefits-intro">
          Experience the future of waste management with measurable results and sustainable operations.
        </p>

        <div className="benefits-image-section">
          <div className="benefits-image">
            <img src="/src/assets/robot-benefits.png" alt="Waste Management Robot" />
          </div>

          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
