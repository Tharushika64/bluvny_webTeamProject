import React from 'react';

export default function TodaySchedule({ schedules }) {
  return (
    <div className="schedule-card today-schedule">
      <div className="card-header">
        <h3>Today's Schedule</h3>
        <p className="card-subtitle">Operations planned for today</p>
      </div>
      
      <div className="schedule-list">
        {schedules.map((schedule, index) => (
          <div key={schedule.id} className={`schedule-item ${index !== schedules.length - 1 ? 'has-border' : ''}`}>
            <div className="schedule-icon-wrapper">
              <div className={`schedule-icon icon-${schedule.status.toLowerCase()}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                </svg>
              </div>
            </div>
            
            <div className="schedule-details">
              <div className="schedule-zone">{schedule.zone}</div>
              <div className="schedule-time">{schedule.timeStart} - {schedule.timeEnd}</div>
              <div className="schedule-operation">{schedule.operation}</div>
            </div>
            
            <div className={`status-badge status-${schedule.status.toLowerCase()}`}>
              {schedule.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
