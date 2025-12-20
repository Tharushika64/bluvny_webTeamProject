import React, { useState, useEffect, useRef } from 'react';
import avatarSvg from '../../assets/avatar.svg';

export default function HeaderBar({ activeRoute, onNavigate }) {
  // Try to load a real uploaded photo first (place a file at src/assets/avatar.jpg)
  const [imgSrc, setImgSrc] = useState('/src/assets/avatar.jpg');
  const [imgError, setImgError] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const popRef = useRef(null);

  useEffect(() => {
    // fetch mock notifications
    fetch('/mock/notifications.json')
      .then(res => res.ok ? res.json() : [])
      .then(json => setNotifications(json || []))
      .catch(() => setNotifications([]));

    // demo: simulate incoming notification every 20s
    const id = setInterval(() => {
      const next = {
        id: Date.now(),
        title: 'New alert',
        message: 'A new notification arrived',
        time: new Date().toISOString(),
        read: false,
      };
      setNotifications(prev => [next, ...prev]);
    }, 20000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function onDoc(e) {
      if (popRef.current && !popRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;
  const getHeader = () => {
    switch (activeRoute) {
      case 'alerts':
        return {
          title: 'Alerts & Notifications',
          subtitle: 'Monitor and manage system alerts',
        };
      case 'robot':
        return {
          title: 'Robot Control Panel',
          subtitle: 'Manage robot operations and settings',
        };
      case 'overview':
        return {
          title: '',
          subtitle: '',
          
        };
      case 'map':
        return {
          title: 'Interactive Map',
          subtitle: 'Real-time robot location and operational boundaries',

        };
      case 'scheduling':
        return {
          title: 'Scheduling Dashboard',
          subtitle: '',
        };
      case 'users':
        return {
          title: 'User Management',
          subtitle: '',
        };
      default:
        return {
          title: 'BLUVYN Dashboard',
          subtitle: 'Clean Coasts. Smart Tech.',
        };
    }
  };

  const { title, subtitle } = getHeader();

  return (
    <header className="header">
      <div>
        <div className="welcome">Welcome back, <strong>Super Admin</strong></div>
        {title ? <div className="title">{title}</div> : null}
        {subtitle ? <div className="subtitle">{subtitle}</div> : null}
      </div>

      <div className="actions">
        <div className="notif-wrap" ref={popRef}>
          <button
            className="icon-btn notif-btn"
            aria-label={`Notifications (${unreadCount} unread)`}
            onClick={() => setOpen(o => !o)}
          >
            🔔
            {unreadCount > 0 && <span className="bell-badge" aria-hidden>{unreadCount}</span>}
          </button>

          {open && (
            <div className="notif-popover">
              <div className="popover-header">
                <div>Notifications</div>
                <button className="mark-btn" onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}>
                  Mark all read
                </button>
              </div>
              <div className="notif-list">
                {notifications.length === 0 && <div className="notif-empty">No notifications</div>}
                {notifications.map(n => (
                  <div key={n.id} className={`notif-item ${n.read ? 'read' : 'unread'}`} onClick={() => setNotifications(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x))}>
                    <div className="notif-title">{n.title}</div>
                    <div className="notif-msg">{n.message}</div>
                    <div className="notif-time">{new Date(n.time).toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          className="user"
          role="button"
          tabIndex={0}
          aria-label="Open user profile"
          onClick={() => onNavigate ? onNavigate('users') : null}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate ? onNavigate('users') : null;
            }
          }}
        >
          <div className="user-info">
            <div className="user-name">Jude Perera</div>
            <div className="user-role">Super Admin</div>
          </div>
          <div className="avatar">
            {!imgError ? (
              <img
                src={imgSrc}
                alt="Jude Perera"
                className="avatar-img"
                onError={() => {
                  // if first image fails (uploaded photo), fall back to svg; if svg fails, show initials
                  if (imgSrc !== avatarSvg) {
                    setImgSrc(avatarSvg);
                  } else {
                    setImgError(true);
                  }
                }}
              />
            ) : (
              <div className="initials">JP</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
