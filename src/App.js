import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; // 🔸 Make sure you created Login.js
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔐 Login control

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Sidebar />
          <div className="main">
            <Topbar />
            <Dashboard />
          </div>
        </>
      )}
    </div>
  );
}

export default App;


