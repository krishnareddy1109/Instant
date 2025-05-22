import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField
} from '@mui/material';
import { addDoc, collection, doc } from 'firebase/firestore';
import { auth, database } from '../firebase/setup'; // make sure you have this file
import pen from '../images/pen.png'; // update the path if pen.png is elsewhere

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  minHeight: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
};

export default function Message() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mailId, setMailId] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendToSender = async () => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, 'Send');
    await addDoc(messageRef, {
      to: mailId,
      subject,
      message,
      timestamp: new Date(),
    });
  };

  const sendToReceiver = async () => {
    const receiverDoc = doc(database, 'Users', mailId);
    const inboxRef = collection(receiverDoc, 'Inbox');
    try {
      await addDoc(inboxRef, {
        from: auth.currentUser?.email,
        subject,
        message,
        timestamp: new Date(),
      });
      await sendToSender();
      handleClose();
    } catch (err) {
      console.error('Send failed:', err);
    }
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: '10px',
          padding: '10px 20px',
          backgroundColor: '#bee0ff',
          borderRadius: '20px',
          width: '150px',
          margin: '1rem auto',
        }}
      >
        <img src={pen} alt="compose" style={{ width: '20px' }} />
        <span style={{ fontSize: '1rem' }}>Compose</span>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginBottom: '1rem' }}
          >
            New Message
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="To"
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            multiline
            minRows={8}
            variant="outlined"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <Button variant="contained" onClick={sendToReceiver}>
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
