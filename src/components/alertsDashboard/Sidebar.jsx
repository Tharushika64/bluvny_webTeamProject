// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLE_LABELS, ROLE_NAV_ITEMS, ROLE_BOTTOM_ITEMS } from '../../config/rolePermissions';

const allNavItems = [
  { key: 'overview', label: 'Overview', icon: '🔲' },
  { key: 'robot', label: 'Robot Control', icon: '🎮' },
  { key: 'map', label: 'MAP View', icon: '🗺️' },
  { key: 'scheduling', label: 'Scheduling', icon: '📅' },
  { key: 'alerts', label: 'Alerts', icon: '🔔' },
];

const allBottomItems = [
  { key: 'users', label: 'User Management', icon: '👤' },
  { key: 'logout', label: 'Log out', icon: '↩️' },
];

export default function Sidebar({ activeRoute, onNavigate, role = 'super-admin' }) {
  const navigate = useNavigate();

  // Filter nav items based on role permissions
  const allowedNav = ROLE_NAV_ITEMS[role] || ROLE_NAV_ITEMS['super-admin'];
  const allowedBottom = ROLE_BOTTOM_ITEMS[role] || ROLE_BOTTOM_ITEMS['super-admin'];

  const navItems = allNavItems.filter(item => allowedNav.includes(item.key));
  const bottomItems = allBottomItems.filter(item => allowedBottom.includes(item.key));

  const roleLabel = ROLE_LABELS[role] || 'Super Admin';

  const handleLogout = (key) => {
    if (key === 'logout') {
      navigate('/');
    } else {
      onNavigate(key);
    }
  };

  const sidebarColors = {
    'super-admin': '#041643',
    'admin': 'linear-gradient(180deg, #1352F1, #0B2F8B)',
    'normal-user': '#939393',
    'user': '#696969',
  };

  return (
    <aside className="sidebar" style={{ background: sidebarColors[role] || '#041643' }}>
      <div>
        {/* Logo and branding */}
        <div className="brand">
          <img src="/src/assets/logo 2.png" alt="BLUVYN Logo" className="logo-img" />
        </div>

        {/* Role badge */}
        <button className="role-btn">
          🛡️ {roleLabel}
        </button>

        {/* Section label */}
        <div className="section-label">MANAGE</div>

        {/* Navigation items filtered by role */}
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

      {/* Bottom navigation filtered by role */}
      <div className="nav bottom-nav">
        {bottomItems.map(item => (
          <button
            key={item.key}
            className={activeRoute === item.key ? 'active' : ''}
            onClick={() => handleLogout(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
