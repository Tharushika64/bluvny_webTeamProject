import { useNavigate } from "react-router-dom";
import "./SelectDashboard.css";

// Import images
import superAdminImg from "../assets/super admin.png";
import adminImg from "../assets/admin.png";
import normalUserImg from "../assets/normal user.png";
import userImg from "../assets/user.png";
import logoImg from "../assets/logo3.png";

function SelectDashboard() {
  const navigate = useNavigate();

  const roles = [
    {
      label: "Super Admin",
      image: superAdminImg,
      color: "#a3baf5ff",
      path: "/super-admin",
    },
    {
      label: "Admin",
      image: adminImg,
      color: "#da6ea4ff",
      path: null,
    },
    {
      label: "Normal User",
      image: normalUserImg,
      color: "#ebb557ff",
      path: null,
    },
    {
      label: "User",
      image: userImg,
      color: "#38b48bff",
      path: null,
    },
  ];

  return (
    <div className="page-container">
      <div className="select-dashboard-container">
        {/* Left branding panel */}
        <div className="left-panel">
          <div className="branding">
            <img src={logoImg} alt="BLUVYN Logo" className="logo" />
            
          </div>
        </div>

        {/* Right dashboard panel */}
        <div className="right-panel">
          <h1>Select Dashboard</h1>
          <p>Select your access level to continue.</p>
          <div className="role-grid">
            {roles.map((role, index) => (
              <div
                key={index}
                className="role-card"
                style={{ backgroundColor: role.color }}
                onClick={() => role.path && navigate(role.path)}
              >
                <img src={role.image} alt={role.label} className="role-icon" />
                <span>{role.label}</span>
              </div>
            ))}
          </div>
          <footer>© 2025 Bluvyn Beach Clean Robot. All Rights Reserved.</footer>
        </div>
      </div>
    </div>
  );
}

export default SelectDashboard;
