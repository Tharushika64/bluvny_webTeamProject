import React, { useEffect, useState } from 'react';
import TopCards from './TopCards';
import HourlyChart from './HourlyChart';
import TodaysActivity from './TodaysActivity';
import RecentActivities from './RecentActivities';
import './overview.css';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [range, setRange] = useState('today');

  // dev toggle state
  const [devStatus, setDevStatus] = useState('Working');
  const [devDetails, setDevDetails] = useState('');

  useEffect(() => {
    fetch('/mock/dashboard.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => {
        setData(json);
        // keep a local mutable copy of the top cards so dev overrides are easy to apply
        setCards(json.topCards || []);

        // apply any persisted override from localStorage
        try {
          const saved = localStorage.getItem('dev_robot_status');
          if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.value) {
              const idx = (json.topCards || []).findIndex(cc => cc.title === 'Robot Status');
              if (idx > -1) {
                const newCards = (json.topCards || []).slice();
                newCards[idx] = { ...newCards[idx], value: parsed.value, details: parsed.details || '' };
                setCards(newCards);
                setDevStatus(parsed.value);
                setDevDetails(parsed.details || '');
              }
            }
          }
        } catch (e) {
          // ignore parse errors
        }
      })
      .catch(err => {
        console.error(err);
        setError(err);
      });
  }, []);

  if (error) return <div className="overview-dashboard">Failed to load data</div>;
  if (!data) return <div className="overview-dashboard">Loading...</div>;

  const current = (data && data.hourlyActivity && (data.hourlyActivity[range] || data.hourlyActivity.today)) || { labels: [], values: [] };

  const applyDevStatus = () => {
    const idx = (cards || []).findIndex(c => c.title === 'Robot Status');
    if (idx === -1) return;
    const newCards = (cards || []).slice();
    newCards[idx] = { ...newCards[idx], value: devStatus, details: devDetails };
    setCards(newCards);
    // persist
    try { localStorage.setItem('dev_robot_status', JSON.stringify({ value: devStatus, details: devDetails })); } catch (e) {}
  };

  const resetDevStatus = () => {
    try { localStorage.removeItem('dev_robot_status'); } catch (e) {}
    // restore from fetched data
    setCards(data.topCards || []);
    setDevStatus('Working');
    setDevDetails('');
  };

  return (
    <div className="overview-dashboard">
      <div className="page-header">
        <h2>Robot Dashboard</h2>
        <p className="subtitle">Real-time monitoring and status overview</p>
      </div>

      <TopCards cards={cards} />

      <div className="dev-panel card" aria-hidden={false} aria-label="Developer status controls">
        <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <label className="dev-label" htmlFor="dev-status">Dev: Status</label>
          <select id="dev-status" value={devStatus} onChange={(e) => setDevStatus(e.target.value)} className="dev-select">
            <option>Working</option>
            <option>Idle</option>
            <option>Offline</option>
            <option>Error</option>
            <option>Issue</option>
          </select>

          <label className="dev-label" htmlFor="dev-details">Details</label>
          <input id="dev-details" className="dev-input" placeholder="Optional details (e.g. motor fault)" value={devDetails} onChange={(e) => setDevDetails(e.target.value)} />

          <div className="dev-actions">
            <button className="btn" onClick={applyDevStatus}>Apply</button>
            <button className="btn btn-ghost" onClick={resetDevStatus}>Reset</button>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <section className="chart-section">
          <div className="card">
            <div className="card-row" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="card-title">Hourly Activity</div>
              <div className="range-controls" role="tablist" aria-label="Chart time range">
                <button
                  className={"range-btn " + (range === 'today' ? 'active' : '')}
                  onClick={() => setRange('today')}
                  role="tab"
                  aria-selected={range === 'today'}
                >
                  Today
                </button>
                <button
                  className={"range-btn " + (range === 'last7' ? 'active' : '')}
                  onClick={() => setRange('last7')}
                  role="tab"
                  aria-selected={range === 'last7'}
                >
                  Last 7 Days
                </button>
              </div>
            </div>

            <HourlyChart labels={current.labels} values={current.values} />
          </div>
        </section>

        <aside className="side-panels">
          <TodaysActivity data={data.today} />
          <RecentActivities items={data.recentActivities} />
        </aside>
      </div>

    </div>
  );
}
