import React from 'react';

export default function AllSchedules({ schedules, onDelete }) {
  return (
    <div className="schedule-card all-schedules">
      <div className="card-header">
        <h3>All Schedules</h3>
        <p className="card-subtitle">Manage all robot operation schedules</p>
      </div>
      
      <div className="schedules-table">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="schedule-row">
            <div className="row-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"></path>
              </svg>
            </div>
            
            <div className="row-info">
              <div className="row-title">{schedule.zone}</div>
              <div className="row-meta">{schedule.timeStart} • {schedule.operation}</div>
            </div>
            
            <div className="row-days">
              {['Mon', 'Wed', 'Fri'].map((day, idx) => (
                <span key={idx} className="day-tag">{day}</span>
              ))}
            </div>
            
            <div className="row-status">
              <span className={`status-pill status-${schedule.status.toLowerCase()}`}>
                {schedule.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
            
            <button 
              className="btn-delete"
              onClick={() => onDelete(schedule.id)}
              title="Delete schedule"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
