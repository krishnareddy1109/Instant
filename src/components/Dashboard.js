import React, { useState } from "react";
import Middle from "./Middle";
import Right from "./Right"; // if you're displaying email details on click

function Dashboard({ subCollect, search }) {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div
      className="dashboard-content"
      style={{
        marginLeft: "12vw", // matches Sidebar width
        padding: "1rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {selectedEmail ? (
        <Right email={selectedEmail} onBack={() => setSelectedEmail(null)} />
      ) : (
        <Middle
          subCollect={subCollect}
          search={search}
          onSelectEmail={(email) => setSelectedEmail(email)}
        />
      )}
    </div>
  );
}

export default Dashboard;


