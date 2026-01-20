import React, { useState } from 'react';
import './UserManagement.css';

export default function UserManagement() {
  const users = [
    {
      id: 1,
      name: 'Super Admin',
      icon: '🛡️',
      role: 'Super Admin',
      status: 'Active',
      lastActive: '10/26/2025, 7:12:56 PM',
      permissions: ['Full System Access', 'User Management', 'Alerts', 'Robot Control', 'Map View', 'Scheduling'],
      headerColor: '#1e3a8a'
    },
    {
      id: 2,
      name: 'Admin User',
      icon: '👤',
      role: 'Administrator',
      status: 'Active',
      lastActive: '10/26/2025, 7:12:56 PM',
      permissions: ['Limit Access', 'Scheduling', 'Alerts', 'Robot Control', 'Map View'],
      headerColor: '#2563eb'
    },
    {
      id: 3,
      name: 'Normal User',
      icon: '👤',
      role: 'Operator',
      status: 'Active',
      lastActive: '10/26/2025, 7:12:56 PM',
      permissions: ['Map View', 'Scheduling', 'Robot Control', 'Alerts'],
      headerColor: '#9ca3af'
    },
    {
      id: 4,
      name: 'Visit User',
      icon: '👁️',
      role: 'Visitor',
      status: 'Active',
      lastActive: '10/26/2025, 7:12:56 PM',
      permissions: ['View Only', 'Status Overview', 'Map View'],
      headerColor: '#9ca3af'
    }
  ];

  return (
    <div className="user-management">
      <div className="user-management-header">
        <h1>User Management</h1>
        <p>Manage user accounts and permissions</p>
      </div>

      <div className="user-cards-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-card-header" style={{ backgroundColor: user.headerColor }}>
              <span className="user-icon">{user.icon}</span>
              <h2>{user.name}</h2>
            </div>

            <div className="user-card-content">
              <div className="user-info-row">
                <label>Roal :</label>
                <span className="role-badge">{user.role}</span>
              </div>

              <div className="user-info-row">
                <label>Status :</label>
                <span className="status-badge active">{user.status}</span>
              </div>

              <div className="user-info-row">
                <label>Last Active:</label>
                <span className="last-active">{user.lastActive}</span>
              </div>

              <hr className="divider" />

              <div className="permissions-section">
                <label>Permissions:</label>
                <div className="permissions-list">
                  {user.permissions.map((permission, index) => (
                    <span key={index} className="permission-tag">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
