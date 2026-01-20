import React, { useState } from 'react';
import '../styles/MarketingPage.css';
import MarketingHeader from '../components/Marketing/MarketingHeader';
import HeroSection from '../components/Marketing/HeroSection';
import AboutSection from '../components/Marketing/AboutSection';
import BenefitsSection from '../components/Marketing/BenefitsSection';
import ContactSection from '../components/Marketing/ContactSection';
import Footer from '../components/Marketing/Footer';

export default function MarketingPage() {
  return (
    <div className="marketing-page">
      <MarketingHeader />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
