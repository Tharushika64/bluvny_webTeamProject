import React from 'react';

export default function TodaysActivity({ data }) {
  if (!data) return null;

  return (
    <div className="todays-activity card">
      <div className="card-title">Today's Activity</div>
      <div className="activity-grid">
        <div className="activity-row"><span className="label">Areas Covered</span><span>{data.areasCovered}</span></div>
        <div className="activity-row"><span className="label">Distance Traveled</span><span>{data.distanceTraveled}</span></div>
        <div className="activity-row"><span className="label">Operation Time</span><span>{data.operationTime}</span></div>
        <div className="activity-row"><span className="label">Garbage Collected</span><span>{data.garbageCollected}</span></div>
      </div>
    </div>
  );
}
