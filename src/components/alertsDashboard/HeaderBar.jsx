import React from 'react';

export default function HeaderBar({ activeRoute }) {
  const getHeader = () => {
    switch (activeRoute) {
      case 'alerts':
        return {
          title: 'Alerts & Notifications',
          subtitle: 'Monitor and manage system alerts',
        };
      case 'robot':
        return {
          title: 'Robot Control Panel',
          subtitle: 'Manage robot operations and settings',
        };
      case 'overview':
        return {
          title: 'System Overview',
          subtitle: '',
        };
      case 'map':
        return {
          title: 'MAP View',
          subtitle: '',
        };
      case 'scheduling':
        return {
          title: 'Scheduling Dashboard',
          subtitle: '',
        };
      case 'users':
        return {
          title: 'User Management',
          subtitle: '',
        };
      default:
        return {
          title: 'BLUVYN Dashboard',
          subtitle: 'Clean Coasts. Smart Tech.',
        };
    }
  };

  const { title, subtitle } = getHeader();

  return (
    <header className="header">
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </header>
  );
}
