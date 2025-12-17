import { useNavigate } from "react-router-dom";
import "./SelectDashboard.css";

function SelectDashboard() {
  const navigate = useNavigate();
  

  const roles = [
    {
      label: "Super Admin",
      image: "src/assets/super admin.png",
      color: "#a3baf5ff",
      path: "/super-admin",
      
    },
    {
      label: "Admin",
      image: "src/assets/admin.png",
      color: "#da6ea4ff",
      path: null,
    },
    {
      label: "Normal User",
      image: "src/assets/normal user.png",
      color: "#ebb557ff",
      path: null,
    },
    {
      label: "User",
      image: "src/assets/user.png",
      color: "#38b48bff",
      path: null,
    },
  ];

  return (
    <div className="select-dashboard-container">
      <div className="left-panel">
        <div className="branding">
          <img src="src/assets/logo3.png" alt="BLUVYN Logo" className="logo" />
          
        </div>
      </div>

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
  );
}

export default SelectDashboard;
