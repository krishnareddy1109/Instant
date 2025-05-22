import React from "react";
import "./IntroPage.css";

function IntroPage({ onStart }) {
  return (
    <div className="intro-container">
      <h1>Welcome to <span>@instant</span></h1>
      <p>Your next-generation mail platform – smart, fast, and secure.</p>
      <p>All in one platform for your services.</p>

      <div className="features-grid">
        <div className="feature-card">📥 Smart Inbox</div>
        <div className="feature-card">📤 One-Click Send</div>
        <div className="feature-card">☁️ Cloud Sync</div>
        <div className="feature-card">🛡️ Secure by Design</div>
        <div className="feature-card">💬 Messenger</div>
      </div>

      <button className="login-button" onClick={onStart}>Login</button>
    </div>
  );
}

export default IntroPage;

