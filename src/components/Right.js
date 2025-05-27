import React from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function Right({ email, onBack }) {
  if (!email) return null;

  return (
    <div style={{ padding: "1rem 2rem", flex: 1 }}>
      <IconButton onClick={onBack}>
        <ArrowBack />
      </IconButton>
      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">{email.sender}</Typography>
        <Typography variant="subtitle1">{email.email}</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {/* Display email content here */}
          {email.content || "No content available."}
        </Typography>
      </Paper>
    </div>
  );
}

export default Right;
