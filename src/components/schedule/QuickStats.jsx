import React from 'react';

export default function QuickStats({ stats }) {
  return (
    <div className="schedule-card quick-stats">
      <div className="card-header">
        <h3>Quick Stats</h3>
        <p className="card-subtitle">Scheduling overview</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-label">Total Schedules</div>
          <div className="stat-value">{stats.totalSchedules}</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-label">Active Today</div>
          <div className="stat-value">{stats.activeToday}</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-label">This Week</div>
          <div className="stat-value">{stats.thisWeek}</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-label">Avg Duration</div>
          <div className="stat-value">{stats.avgDuration}</div>
        </div>
      </div>
    </div>
  );
}
