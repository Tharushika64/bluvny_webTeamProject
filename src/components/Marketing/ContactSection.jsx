import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <a href="#contact" className="contact-label">Contact</a>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Let's talk with us</h2>
          <p>
            Have questions about Bluvyn? Our team is here to help you with your waste management needs. Reach out to us today and let's discuss how we can help!
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">BCI Campus,</p>
                <p className="info-label">Negambo</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <p className="info-text">+(94) 111 777 888</p>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p className="info-text">bluvyn@gmail.com</p>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
