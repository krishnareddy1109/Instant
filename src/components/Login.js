import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("authToken", token); // store token for future requests
      onLogin(); // callback to notify successful login
    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password.");
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
        <p className="small-link">
          <a href="/forgot-password">Forgot password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
