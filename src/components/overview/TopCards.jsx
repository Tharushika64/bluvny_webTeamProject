import React from 'react';

function Card({ c }) {
  const isPercent = typeof c.value === 'string' && c.value.trim().endsWith('%');
  const percent = isPercent ? parseInt(c.value, 10) : null;

  const isStatusCard = c.title === 'Robot Status';
  const statusValue = typeof c.value === 'string' ? c.value : '';
  const statusKey = statusValue.toLowerCase();
  const statusColorMap = {
    working: c.color,
    idle: '#9AA0A6',
    offline: '#FF7272',
    error: '#FF6B00',
    issue: '#FF6B00'
  };
  const statusDotColor = statusColorMap[statusKey] || c.color;
  const hasIssue = isStatusCard && (statusKey !== 'working' || (c.details && c.details.length > 0));

  return (
    <div className={`top-card ${isStatusCard && hasIssue ? 'has-issues' : ''}`} role="article" tabIndex={0} aria-label={c.title}>
      {/* left colored accent with subtle gradient */}
      <div
        className="card-accent"
        style={{ background: `linear-gradient(180deg, ${c.color}, ${c.color}33)` }}
        aria-hidden
      />

      <div className="card-left">
        <div className="card-icon" style={{ backgroundColor: c.color, boxShadow: `0 12px 30px ${c.color}66` }} aria-hidden>
          <span className="sr-only">{c.title} icon</span>
          {c.icon}
        </div>
        <div className="card-body">
          <div className="card-title">{c.title}</div>

          {isStatusCard && (
            <div className={`status-block ${hasIssue ? 'has-issues' : ''}`} aria-hidden>
              <div className="status-inline" role="status" aria-live="polite">
                <span className="status-dot" style={{ background: statusDotColor }} />
                <span className="status-text">{statusValue}</span>
              </div>
              {c.details && c.details.length > 0 && (
                <div className="status-note" role="note">
                  {c.details}
                </div>
              )}
            </div>
          )} 

          {/* Battery-specific inline progress under the battery title */}
          {c.title === 'Battery Level' && isPercent && (
            <div className="battery-progress" aria-hidden>
              <div className="battery-percent">{c.value}</div>
              <div className="progress-wrap battery small">
                <div className="progress-bar" style={{ width: `${percent}%`, background: `linear-gradient(90deg, ${c.color}, ${c.color}bb)` }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {!isStatusCard && (
        <div className="card-right">
          <div className="card-value">{c.value}</div>
          {isPercent ? (
            <div className="progress-wrap small" aria-hidden>
              <div className="progress-bar" style={{ width: `${percent}%`, background: c.color }} />
            </div>
          ) : (
            <div className="value-pill" style={{ borderColor: c.color }}>{c.value}</div>
          )}
        </div>
      )} 

      {c.subtitle && (
        <div className="card-footer">
          <div className="card-sub-bottom">{c.subtitle}</div>
        </div>
      )}
    </div>
  );
}

export default function TopCards({ cards = [] }) {
  return (
    <div className="top-cards">
      {cards.map((c, i) => (
        <Card key={i} c={c} />
      ))}
    </div>
  );
}
