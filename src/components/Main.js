import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

function Main() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Fixed Topbar */}
      <div style={{ height: "64px", flexShrink: 1 }}>
        <Topbar />
      </div>

      {/* Scrollable content below Topbar */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar (fixed width) */}
        <div style={{ width: "70px", overflowY: "auto" }}>
          <Sidebar />
        </div>

        {/* Dashboard (scrollable) */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Main;

