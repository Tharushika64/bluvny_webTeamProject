import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    // Redirect to overview page after successful login
    setTimeout(() => {
      navigate('/super-admin');
    }, 300);
  };

  // SVG Icons
  const EmailIcon = () => (
    <svg 
      className="form-label-icon" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const PasswordIcon = () => (
    <svg 
      className="form-label-icon" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  return (
    <div className="login-container">
      <div className="robo-login-card">
        <img src='src\assets\images\LoginRobot.png' alt='robot' className='robot-image'></img>
      </div>
     
      <div className="login-card-wrapper">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <div className="label-with-icon">
                <label htmlFor="email" className="form-label">Email</label>
                <EmailIcon />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="label-with-icon">
                <label htmlFor="password" className="form-label">Password</label>
                <PasswordIcon />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-footer">
            <a href="/signup" className="footer-link">Create an account</a>
            <a href="/forgot-password" className="footer-link">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
