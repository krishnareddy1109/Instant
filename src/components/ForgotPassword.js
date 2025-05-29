import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Reuse the styling if applicable

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/forgot-password", {
        email,
      });

      setMessage(response.data.message || "Password reset link sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>🔐 Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <p className="small-link">
          <a href="/">← Back to Login</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
