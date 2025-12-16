import React from 'react';

const severityIcon = {
  green: { className: 'icon-green', glyph: '✓' },
  yellow: { className: 'icon-yellow', glyph: '!' },
  red: { className: 'icon-red', glyph: '⚠' },
};

export default function AlertItem({ alert, onSetActive, onSetResolved, onDelete }) {
  const icon = severityIcon[alert.severity] || severityIcon.yellow;

  return (
    <div className="alert-item">
      <div className={`alert-icon ${icon.className}`}>{icon.glyph}</div>

      <div className="alert-body">
        <div className="alert-title-row">
          <div className="alert-title">{alert.title}</div>
          <div className="chip" style={{ borderColor: '#1e3569' }}>
            {alert.status === 'active' ? 'Active' : 'Resolved'}
          </div>
        </div>
        <div className="alert-desc">{alert.description}</div>
        <div className="alert-meta">{alert.minutesAgo} minutes ago</div>
      </div>

      <div className="alert-actions">
        <button
          className={`status-btn ${alert.status === 'resolved' ? 'active' : ''}`}
          onClick={onSetResolved}
          title="Mark as Resolved"
        >
          Resolved
        </button>
        <button
          className={`status-btn ${alert.status === 'active' ? 'active' : ''}`}
          onClick={onSetActive}
          title="Mark as Active"
        >
          Active
        </button>
        <button className="delete-btn" onClick={onDelete} title="Delete alert">
          🗑
        </button>
      </div>
    </div>
  );
}

