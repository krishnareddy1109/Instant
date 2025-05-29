import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import IntroPage from "./components/IntroPage";
import Login from "./components/Login";
import Middle from "./components/Middle";
import Right from "./components/Right";
import ForgotPassword from "./components/ForgotPassword"; // ✅ new
import ResetPassword from "./components/ResetPassword";   // ✅ new

function App() {
  const [stage, setStage] = useState("intro");
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Staged flows */}
        <Route
          path="/"
          element={
            stage === "intro" ? (
              <IntroPage onStart={() => setStage("login")} />
            ) : stage === "login" ? (
              <Login onLogin={() => setStage("main")} />
            ) : (
              <Main>
                {selectedEmail ? (
                  <Right email={selectedEmail} onBack={() => setSelectedEmail(null)} />
                ) : (
                  <Middle onSelectEmail={setSelectedEmail} />
                )}
              </Main>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
