import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // You can later replace this with Firebase or API
    if (email && password) {
      console.log("Logging in with", email, password);
      onLogin(); // optional: set auth status
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>🔐 @instant Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="small-link">Forgot password?</p>
      </div>
    </div>
  );
}

export default Login;
