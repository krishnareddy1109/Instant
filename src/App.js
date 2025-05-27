import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import IntroPage from "./components/IntroPage";
import Login from "./components/Login";
import Middle from "./components/Middle";
import Right from "./components/Right";

function App() {
  const [stage, setStage] = useState("intro"); // intro | login | main
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <Router>
      {stage === "intro" && <IntroPage onStart={() => setStage("login")} />}
      {stage === "login" && <Login onLogin={() => setStage("main")} />}
      {stage === "main" && (
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                selectedEmail ? (
                  <Right email={selectedEmail} onBack={() => setSelectedEmail(null)} />
                ) : (
                  <Middle onSelectEmail={setSelectedEmail} />
                )
              }
            />
            {/* Add other routes here */}
          </Routes>
        </Main>
      )}
    </Router>
  );
}

export default App;


