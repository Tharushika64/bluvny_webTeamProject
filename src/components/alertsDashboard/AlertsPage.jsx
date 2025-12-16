import React, { useMemo, useState } from 'react';
import Tabs from './Tabs';
import AlertItem from './AlertItem';

const initialAlerts = [
  {
    id: 'a1',
    title: 'High Garbage Level',
    description: 'Garbage bin at 85% capacity',
    minutesAgo: 5,
    status: 'active', // 'active' | 'resolved'
    severity: 'yellow', // 'green' | 'yellow' | 'red'
  },
  {
    id: 'a2',
    title: 'Battery Level Normal',
    description: 'Battery charged to 78%',
    minutesAgo: 15,
    status: 'resolved',
    severity: 'green',
  },
  {
    id: 'a3',
    title: 'GPS Signal Lost',
    description: 'Unable to determine exact location',
    minutesAgo: 25,
    status: 'resolved',
    severity: 'red',
  },
];

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [activeTab, setActiveTab] = useState('all');

  const counts = useMemo(() => {
    const active = alerts.filter(a => a.status === 'active').length;
    const resolved = alerts.filter(a => a.status === 'resolved').length;
    return { all: alerts.length, active, resolved };
  }, [alerts]);

  const filtered = useMemo(() => {
    if (activeTab === 'active') return alerts.filter(a => a.status === 'active');
    if (activeTab === 'resolved') return alerts.filter(a => a.status === 'resolved');
    return alerts;
  }, [alerts, activeTab]);

  const updateStatus = (id, next) => {
    setAlerts(prev => prev.map(a => (a.id === id ? { ...a, status: next } : a)));
  };

  const deleteAlert = (id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">All Alerts ({counts.all})</div>
        <Tabs counts={counts} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="alert-list">
        {filtered.length === 0 ? (
          <div style={{ color: '#9ca3af' }}>No alerts found in this view.</div>
        ) : (
          filtered.map(alert => (
            <AlertItem
              key={alert.id}
              alert={alert}
              onSetActive={() => updateStatus(alert.id, 'active')}
              onSetResolved={() => updateStatus(alert.id, 'resolved')}
              onDelete={() => deleteAlert(alert.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
