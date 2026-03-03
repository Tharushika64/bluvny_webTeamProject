import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import robotImg from "../../assets/images/robot.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Navigate to login page after successful signup
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  // SVG Icons
  const UserIcon = () => (
    <svg 
      className="form-label-icon" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

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
    <div className="signup-container">
      <div className="signup-card-wrapper">
        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
                <UserIcon />
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose your username"
                value={formData.username}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
                <EmailIcon />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
                <PasswordIcon />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>

          <div className="signup-footer">
            <span className="footer-text">
              Already have an account?
            </span>
            <a href="/login" className="footer-link">Login here</a>
          </div>
        </div>
      </div>

      <div className="robo-signup-card">
        <img src={robotImg} alt="robot" className="Sign-robot-image"></img>
      </div>
    </div>
  );
};

export default Signup;
