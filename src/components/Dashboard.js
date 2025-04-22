import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [active, setActive] = useState("Feed");

  return (
    <div className="dashboard">
     
      {/* Main content area */}
      <div className="dashboard-content">
        {active === "Feed" && (
          <>
            <h3>Feed</h3>
            <div className="feed-card"><p><strong>User</strong> - Post title</p><p>empty...</p></div>
            <div className="feed-card"><p><strong>User</strong> - Post title</p><p>empty...</p></div>
            <div className="feed-card"><p><strong>User</strong> - Post title</p><p>empty...</p></div>
          </>
        )}

        {active === "Mail" && (
          <>
            <h3>Mailbox</h3>
            <div className="mail-card">Inbox Message 1</div>
            <div className="mail-card">Inbox Message 2</div>
            <div className="mail-card">Inbox Message 3</div>
          </>
        )}

        {active === "Inbox" && (
          <>
            <h3>📥 Inbox</h3>
            <div className="mail-card">Message 1</div>
            <div className="mail-card">Message 2</div>
          </>
        )}

        {active === "Sent" && (
          <>
            <h3>📤 Sent</h3>
            <div className="mail-card">Sent Email 1</div>
          </>
        )}

        {active === "Drafts" && (
          <>
            <h3>📝 Drafts</h3>
            <div className="mail-card">Draft Email 1</div>
          </>
        )}

        {active === "Trash" && (
          <>
            <h3>🗑️ Trash</h3>
            <div className="mail-card">Deleted Email 1</div>
          </>
        )}

        {active === "Chat" && (
          <>
            <h3>Chat</h3>
            <div className="chat-card">John: Let's sync up later.</div>
            <div className="chat-card">Sarah: Shared the file with you.</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;



