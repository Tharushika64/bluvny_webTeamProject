import React, { useState } from 'react';
import './RobotSettings.css';

const RobotSettings = () => {
  const [settings, setSettings] = useState({
    theftAlert: true,
    batteryAlert: true,
    garbageAlert: true,
    batteryThreshold: 20,
    garbageThreshold: 80
  });

  const handleToggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleThresholdChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: parseInt(value) || 0
    }));
  };

  return (
    <section className="robot-settings card">
     
        <h2>Robot Settings</h2>
        <p className="section-subtitle">Configure robot behavior and alerts</p>
     

      <div className="settings-grid">
        <div className="setting-item">
          <div className="setting-header">
            <strong>Theft Alert system</strong>
            <span className="setting-description">GSM notifications for unauthorized movement</span>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={settings.theftAlert}
              onChange={() => handleToggleSetting('theftAlert')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-header">
            <strong>Battery Low Alert</strong>
            <span className="setting-description">
              Notify when battery drops below
              <input 
                type="number" 
                min="0" 
                max="100" 
                value={settings.batteryThreshold}
                onChange={(e) => handleThresholdChange('batteryThreshold', e.target.value)}
                className="threshold-input"
              />
              %
            </span>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={settings.batteryAlert}
              onChange={() => handleToggleSetting('batteryAlert')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-header">
            <strong>Garbage Full Alert</strong>
            <span className="setting-description">
              Notify when garbage bin reaches
              <input 
                type="number" 
                min="0" 
                max="100" 
                value={settings.garbageThreshold}
                onChange={(e) => handleThresholdChange('garbageThreshold', e.target.value)}
                className="threshold-input"
              />
              %
            </span>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={settings.garbageAlert}
              onChange={() => handleToggleSetting('garbageAlert')}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default RobotSettings;