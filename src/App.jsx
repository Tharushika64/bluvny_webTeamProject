import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

import Sidebar from './components/alertsDashboard/Sidebar';
import HeaderBar from './components/alertsDashboard/HeaderBar';
import AlertsPage from './components/alertsDashboard/AlertsPage';
import RobotControlPage from './components/RobotControl/RobotControlPanel';
import OverviewPage from './components/overview/Dashboard';


import Signup from "./components/Signup/Signup";


export default function App() {
  const [activeRoute, setActiveRoute] = useState('alerts');

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<SelectDashboard />} />
        
        <Route path="/super-admin" element={<Signup />} />
    <div className="app">
      <Sidebar activeRoute={activeRoute} onNavigate={setActiveRoute} />
      <div className="main">
        <HeaderBar activeRoute={activeRoute} />
        <div className="content">
          {activeRoute === 'overview' ? (
  <OverviewPage />
) : activeRoute === 'alerts' ? (
  <AlertsPage />
) : activeRoute === 'robot' ? (
  <RobotControlPage />
) : (
  <div className="card">
    <div className="card-title">Coming soon</div>
    <p style={{ color: '#9ca3af', marginTop: 6 }}>
      This section is a placeholder in the mock.
    </p>
  </div>
)}

        </div>
      </div>
    </div>
  );
}
