import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 

import Sidebar from './components/alertsDashboard/Sidebar';
import HeaderBar from './components/alertsDashboard/HeaderBar';
import AlertsPage from './components/alertsDashboard/AlertsPage';
import RobotControlPage from './components/RobotControl/RobotControlPanel';
import OverviewPage from './components/overview/Dashboard';
import MapView from './components/MapView/MapView';
import MarketingPage from './pages/MarketingPage';
import SelectDashboard from './pages/SelectDashboard';
import UserManagement from './pages/UserManagement';

function Dashboard() {
  const [activeRoute, setActiveRoute] = useState('alerts');

  return (
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
          ) : activeRoute === 'map' ? (
            <MapView />
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
        <Route path="/super-admin" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/viewer" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
