import React, { useState } from 'react';
import './RobotControlPanel.css';
import PowerManagement from './PowerManagement';
import RobotSettings from './RobotSettings';
import OperationMode from './OperationMode';
import DirectionalControls from './DirectionalControls';

const RobotControlPanel = () => {
  const [robotPower, setRobotPower] = useState('Online');
  
  const handlePowerChange = (status) => {
    setRobotPower(status);
  };

  return (
    <div className="control-panel">
      <div className="panel-sections">
        <PowerManagement 
          robotPower={robotPower} 
          onPowerChange={handlePowerChange}
        />
        
        <RobotSettings />
        
        <OperationMode />
        
        <DirectionalControls />
      </div>
    </div>
  );
};

export default RobotControlPanel;