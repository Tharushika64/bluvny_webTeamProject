// src/components/Sidebar.jsx
import React from 'react';

const navItems = [
  { key: 'overview', label: 'Overview', icon: '🔲' },
  { key: 'robot', label: 'Robot Control', icon: '🎮' },
  { key: 'map', label: 'MAP View', icon: '🗺️' },
  { key: 'scheduling', label: 'Scheduling', icon: '📅' },
  { key: 'alerts', label: 'Alerts', icon: '🔔' },
];

const bottomItems = [
  { key: 'users', label: 'User Management', icon: '👤' },
  { key: 'logout', label: 'Log out', icon: '↩️' },
];

export default function Sidebar({ activeRoute, onNavigate }) {
  return (
    <aside className="sidebar">
      <div>
        {/* Logo and branding */}
        <div className="brand">
          <img src="/src/assets/logo 2.png" alt="BLUVYN Logo" className="logo-img" />
        </div>

        {/* Super Admin badge */}
        <button className="role-btn">
          🛡️ Super Admin
        </button>

        {/* Section label */}
        <div className="section-label">MANAGE</div>

        {/* Navigation items */}
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.key}
              className={activeRoute === item.key ? 'active' : ''}
              onClick={() => onNavigate(item.key)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom navigation */}
      <div className="nav bottom-nav">
        {bottomItems.map(item => (
          <button
            key={item.key}
            className={activeRoute === item.key ? 'active' : ''}
            onClick={() => onNavigate(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
