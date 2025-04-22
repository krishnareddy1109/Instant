import React, { useState } from "react";
import "./Topbar.css";

function Topbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="app-title">
          <h2>@instant</h2>
        </div>
      </div>

      <div className="topbar-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <span className="icon">🔔</span>
        <div className="profile-wrapper">
          <span className="icon" onClick={toggleDropdown}>👤</span>
          {showDropdown && (
            <div className="profile-dropdown">
              <div className="dropdown-item"> Profile</div>
              <div className="dropdown-item"> Settings</div>
              <div className="dropdown-item"> Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
