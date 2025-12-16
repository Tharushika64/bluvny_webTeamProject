import React, { useState } from 'react';
import './DirectionalControls.css';

const DirectionalControls = () => {
  const [activeDirection, setActiveDirection] = useState(null);

  const directions = [
    { id: 'up', icon: '↑', label: 'Forward' },
    { id: 'left', icon: '←', label: 'Left' },
    { id: 'right', icon: '→', label: 'Right' },
    { id: 'down', icon: '↓', label: 'Backward' }
  ];
  const handleDirectionClick = (direction) => {
    setActiveDirection(direction);
    console.log(`Moving ${direction}`);
    setTimeout(() => setActiveDirection(null), 300);
  };

  return (
    <section className="directional-controls card">
      
        <h2>Directional Controls</h2>
    

      <div className="controls-grid">
        <button
          className={`direction-btn btn-up ${activeDirection === 'up' ? 'active' : ''}`}
          onClick={() => handleDirectionClick('up')}
          aria-label="Move Forward"
        >
          ↑
        </button>

        <button
          className={`direction-btn btn-left ${activeDirection === 'left' ? 'active' : ''}`}
          onClick={() => handleDirectionClick('left')}
          aria-label="Move Left"
        >
          ←
        </button>

        <button className="direction-btn btn-center">
          <span className="center-dot"><span className="inner-dot"/></span>
        </button>

        <button
          className={`direction-btn btn-right ${activeDirection === 'right' ? 'active' : ''}`}
          onClick={() => handleDirectionClick('right')}
          aria-label="Move Right"
        >
          →
        </button>

        <button
          className={`direction-btn btn-down ${activeDirection === 'down' ? 'active' : ''}`}
          onClick={() => handleDirectionClick('down')}
          aria-label="Move Backward"
        >
          ↓
        </button>
      </div>

      <div className="action-buttons" style={{marginTop:8}}>
        <button className="action-btn stop-btn">
          <span className="action-icon">✘</span>
          Stop
        </button>
        <button className="action-btn home-btn">
          <span className="action-icon">🏠</span>
          Return Home
        </button>
      </div>

      <div className="controls-caption">Use directional buttons to control robot movement</div>
    </section>
  );
};

export default DirectionalControls;