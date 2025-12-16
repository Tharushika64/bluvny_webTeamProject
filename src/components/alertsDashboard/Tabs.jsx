import React from 'react';

export default function Tabs({ counts, activeTab, onChange }) {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onChange('all')}
      >
        All Alerts ({counts.all})
      </button>
      <button
        className={`tab ${activeTab === 'active' ? 'active' : ''}`}
        onClick={() => onChange('active')}
      >
        Active ({counts.active})
      </button>
      <button
        className={`tab ${activeTab === 'resolved' ? 'active' : ''}`}
        onClick={() => onChange('resolved')}
      >
        Resolved ({counts.resolved})
      </button>
    </div>
  );
}

