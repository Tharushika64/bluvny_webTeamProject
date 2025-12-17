import React from 'react';

export default function RecentActivities({ items = [] }) {
  return (
    <div className="recent-activities card">
      <div className="card-title">Recent Activities</div>
      <div className="activities-list">
        {items.map((it, idx) => {
          const status = (it.status || '').toLowerCase();
          const dotClass = status.includes('full') || status.includes('98') ? 'red' : status.includes('completed') ? 'green' : 'gray';
          return (
            <div className="activity-item" key={idx} tabIndex={0}>
              <div className="left">
                <div className="activity-type">{it.type}</div>
                <div className="activity-sub">{it.sub}</div>
              </div>
              <div className="right">
                <div className="activity-status status-badge">
                  <span className={`status-dot ${dotClass}`} aria-hidden />
                  <span>{it.status}</span>
                </div>
                <div className="activity-time">{it.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
