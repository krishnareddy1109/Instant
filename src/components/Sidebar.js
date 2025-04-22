import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ setActive }) {
  const [showMailMenu, setShowMailMenu] = useState(false);

  const toggleMailMenu = () => {
    setShowMailMenu(!showMailMenu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-icon" onClick={() => setActive("Feed")}>🏠</div>
      <div className="sidebar-icon" onClick={() => setActive("News")}>📰</div>

      <div className="sidebar-icon" onClick={toggleMailMenu}>📧</div>

      {showMailMenu && (
        <div className="submenu">
          <div onClick={() => setActive("Inbox")}>📥 Inbox</div>
          <div onClick={() => setActive("Sent")}>📤 Sent</div>
          <div onClick={() => setActive("Drafts")}>📝 Drafts</div>
          <div onClick={() => setActive("Trash")}>🗑️ Trash</div>
        </div>
      )}

      <div className="sidebar-icon" onClick={() => setActive("Chat")}>💬</div>
      <div className="sidebar-icon" onClick={() => setActive("Calendar")}>📅</div>
      <div className="sidebar-icon" onClick={() => setActive("Settings")}>⚙️</div>
    </div>
  );
}

export default Sidebar;


