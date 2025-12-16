import React, { useState } from 'react';
import './OperationMode.css';

const OperationMode = () => {
  const [selectedMode, setSelectedMode] = useState('autonomous');

  const modes = [
    {
      id: 'autonomous',
      name: 'Autonomous',
      description: 'AI - Controlled Operation',
      icon: '⚙️'
    },
    {
      id: 'manual',
      name: 'Manual',
      description: 'User - Controlled Operation',
      icon: '👆'
    }
  ];

  return (
    <section className="operation-mode card">
      <div className="card-header">
        <h2>Operation Mode</h2>
        <p className="section-subtitle">Switch between manual and autonomous modes</p>
      </div>

      <div className="mode-body" style={{paddingTop:8}}>
        <div className="mode-selector">
          {modes.map(mode => (
            <div 
              key={mode.id}
              className={`mode-option ${selectedMode === mode.id ? 'selected' : ''}`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <div className="mode-icon">{mode.icon}</div>
              <div className="mode-name">{mode.name}</div>
              <div className="mode-subtitle">{mode.description}</div>
              <div className="mode-selector-indicator">
                {selectedMode === mode.id && '✓'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationMode;