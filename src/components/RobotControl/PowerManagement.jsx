import React from 'react';
import './PowerManagement.css';

const PowerManagement = ({ robotPower, onPowerChange }) => {
  const handleTogglePower = () => {
    const newStatus = robotPower === 'Online' ? 'Offline' : 'Online';
    onPowerChange(newStatus);
  };

  const handleReturnToStation = () => {
    alert('Robot returning to changing station...');
  };

  return (
    <section className="power-management card">
      <div className="card-header">
        <h2>Power Management</h2>
        <p className="section-subtitle">Turn robot on or off</p>
      </div>

      <div className="power-body">
        <div className="status-card">
          <div className="status-icon">⏻</div>
          <div>
            <div style={{fontWeight:600}}>Robot Power</div>
            <div style={{color:'#16a34a', fontSize:12}}>Currently {robotPower}</div>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:12, alignItems:'center'}}>
          <button
            className="power-toggle-btn"
            onClick={handleTogglePower}
          >
            {robotPower === 'Online' ? 'Start Operation' : 'Start Operation'}
          </button>

          <button
            className="operation-btn"
            onClick={handleReturnToStation}
          >
            Return to changing station
          </button>
        </div>
      </div>
    </section>
  );
};

export default PowerManagement;