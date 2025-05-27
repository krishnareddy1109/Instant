import React from "react";
import { Routes, Route } from "react-router-dom";
import Middle from "./components/Middle";
import Right from "./components/Right";

function AppRoutes({ selectedEmail, onSelectEmail, onBack }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          selectedEmail ? (
            <Right email={selectedEmail} onBack={onBack} />
          ) : (
            <Middle onSelectEmail={onSelectEmail} />
          )
        }
      />
      {/* Add other routes here */}
    </Routes>
  );
}

export default AppRoutes;
