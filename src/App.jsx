import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from './components/alertsDashboard/Sidebar';
import HeaderBar from './components/alertsDashboard/HeaderBar';
import AlertsPage from './components/alertsDashboard/AlertsPage';
import RobotControlPage from './components/RobotControl/RobotControlPanel';
import OverviewPage from './components/overview/Dashboard';
import MapView from './components/MapView/MapView';
import SchedulePage from './components/schedule/SchedulePage';
import MarketingPage from './pages/MarketingPage';
import SelectDashboard from './pages/SelectDashboard';
import UserManagement from './pages/UserManagement';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import ForgotPassword from './components/Login/ForgotPassword.jsx';

function Dashboard({ role = 'super-admin' }) {
  const [activeRoute, setActiveRoute] = useState('overview');

  return (
    <div className="app">
      <Sidebar activeRoute={activeRoute} onNavigate={setActiveRoute} role={role} />
      <div className="main">
        <HeaderBar activeRoute={activeRoute} role={role} />
        <div className="content">
          {activeRoute === 'overview' ? (
            <OverviewPage />
          ) : activeRoute === 'alerts' ? (
            <AlertsPage />
          ) : activeRoute === 'robot' ? (
            <RobotControlPage />
          ) : activeRoute === 'map' ? (
            <MapView />
          ) : activeRoute === 'scheduling' ? (
            <SchedulePage role={role} />
          ) : activeRoute === 'users' ? (
            <UserManagement />
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/select-dashboard" element={<SelectDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/super-admin" element={<Dashboard role="super-admin" />} />
        <Route path="/admin" element={<Dashboard role="admin" />} />
        <Route path="/user" element={<Dashboard role="normal-user" />} />
        <Route path="/viewer" element={<Dashboard role="user" />} />
      </Routes>
    </Router>
  );
}
