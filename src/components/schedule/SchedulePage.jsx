import React, { useState, useEffect } from 'react';
import TodaySchedule from './TodaySchedule';
import QuickStats from './QuickStats';
import AllSchedules from './AllSchedules';
import './schedule.css';

export default function SchedulePage() {
  const [schedules, setSchedules] = useState([]);
  const [showNewScheduleModal, setShowNewScheduleModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  useEffect(() => {
    // Simulate API call
    const mockSchedules = [
      {
        id: 1,
        zone: 'Zone A',
        operation: 'Autonomous',
        timeStart: '08:00 AM',
        timeEnd: '10:00 AM',
        status: 'Completed',
        daysActive: ['Mon', 'Wed', 'Fri'],
        isActive: true
      },
      {
        id: 2,
        zone: 'Zone C',
        operation: 'Autonomous',
        timeStart: '02:00 PM',
        timeEnd: '04:00 PM',
        status: 'Upcoming',
        daysActive: ['Mon', 'Wed', 'Fri'],
        isActive: true
      },
      {
        id: 3,
        zone: 'Zone C',
        operation: 'Autonomous',
        timeStart: '02:00 PM',
        timeEnd: '04:00 PM',
        status: 'Upcoming',
        daysActive: ['Mon', 'Tue', 'Wed'],
        isActive: true
      },
      {
        id: 4,
        zone: 'Zone B',
        operation: 'Autonomous',
        timeStart: '02:00 PM',
        timeEnd: '04:00 PM',
        status: 'Active',
        daysActive: ['Mon', 'Wed', 'Fri'],
        isActive: true
      }
    ];
    
    setSchedules(mockSchedules);
    setLoading(false);
  }, []);

  const todaySchedules = schedules.slice(0, 3);
  
  const stats = {
    totalSchedules: schedules.length,
    activeToday: schedules.filter(s => s.status === 'Completed' || s.status === 'Active').length,
    thisWeek: 15,
    avgDuration: '2.5h'
  };

  const handleNewSchedule = () => {
    setShowNewScheduleModal(true);
  };

  const handleCloseModal = () => {
    setShowNewScheduleModal(false);
  };

  const handleSaveSchedule = (newSchedule) => {
    const schedule = {
      id: schedules.length + 1,
      ...newSchedule
    };
    setSchedules([...schedules, schedule]);
    setShowNewScheduleModal(false);
  };

  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <div className="header-content">
          <h1>Scheduling Operations</h1>
          <p className="subtitle">Manage robot operation schedules and timings</p>
        </div>
        <button className="btn-new-schedule" onClick={handleNewSchedule}>
          <span className="btn-icon">+</span>
          New Schedule
        </button>
      </div>

      <div className="schedule-content">
        <div className="schedule-left">
          <TodaySchedule schedules={todaySchedules} />
          <AllSchedules schedules={schedules} onDelete={handleDeleteSchedule} />
        </div>
        <div className="schedule-right">
          <QuickStats stats={stats} />
        </div>
      </div>

      {showNewScheduleModal && (
        <NewScheduleModal 
          onClose={handleCloseModal} 
          onSave={handleSaveSchedule}
        />
      )}
    </div>
  );
}

function NewScheduleModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    zone: '',
    operation: 'Autonomous',
    timeStart: '',
    timeEnd: '',
    daysActive: [],
    status: 'Upcoming'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      daysActive: prev.daysActive.includes(day)
        ? prev.daysActive.filter(d => d !== day)
        : [...prev.daysActive, day]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.zone && formData.timeStart && formData.timeEnd) {
      onSave(formData);
    }
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Schedule</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Zone</label>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              placeholder="e.g., Zone A"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Time</label>
              <input
                type="time"
                name="timeStart"
                value={formData.timeStart}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>End Time</label>
              <input
                type="time"
                name="timeEnd"
                value={formData.timeEnd}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Operation Type</label>
            <select
              name="operation"
              value={formData.operation}
              onChange={handleChange}
            >
              <option>Autonomous</option>
              <option>Manual</option>
              <option>Maintenance</option>
            </select>
          </div>

          <div className="form-group">
            <label>Active Days</label>
            <div className="day-picker">
              {days.map(day => (
                <button
                  key={day}
                  type="button"
                  className={`day-btn ${formData.daysActive.includes(day) ? 'active' : ''}`}
                  onClick={() => handleDayToggle(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Create Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
