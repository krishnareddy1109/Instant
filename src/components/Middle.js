import React, { useEffect, useState, useCallback } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { auth, database } from "../firebase/setup";

// Icons
import starIcon from "../images/star.png";
import yellowStar from "../images/yellow.png";
import snoozeIcon from "../images/snooze.png";
import trashIcon from "../images/bin.png";
import refreshIcon from "../images/refresh.png";
import "./Middle.css";

function Middle({ search = "", subCollect = "Inbox" }) {
  const [mailData, setMailData] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const getMail = useCallback(async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const folderRef = collection(userDoc, subCollect || "Inbox");
    try {
      const snapshot = await getDocs(folderRef);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMailData(data);
    } catch (err) {
      console.error("Failed to fetch mail:", err);
    }
  }, [subCollect]);

  const deleteMail = async (mail) => {
    const userDoc = doc(database, "Users", auth.currentUser?.email);
    try {
      await deleteDoc(doc(userDoc, "Inbox", mail.id));
      await deleteDoc(doc(userDoc, "Starred", mail.id));
      await deleteDoc(doc(userDoc, "Snoozed", mail.id));
      getMail();
    } catch (err) {
      console.error("Failed to delete mail:", err);
    }
  };

  const starMail = async (mail) => {
    const userDoc = doc(database, "Users", auth.currentUser?.email);
    try {
      await setDoc(doc(userDoc, "Starred", mail.id), {
        email: mail.email,
        sender: mail.sender,
        starred: true,
      });
      getMail();
    } catch (err) {
      console.error("Failed to star mail:", err);
    }
  };

  const snoozeMail = async (mail) => {
    const userDoc = doc(database, "Users", auth.currentUser?.email);
    try {
      await deleteDoc(doc(userDoc, "Inbox", mail.id));
      await setDoc(doc(userDoc, "Snoozed", mail.id), {
        email: mail.email,
        sender: mail.sender,
      });
      getMail();
    } catch (err) {
      console.error("Failed to snooze mail:", err);
    }
  };

  useEffect(() => {
    getMail();
  }, [getMail]);

  const filteredMails = search
    ? mailData.filter((mail) =>
        mail.sender?.toLowerCase().includes(search.toLowerCase())
      )
    : mailData;

  return (
    <div className="middle-container">
      <div className="middle-toolbar">
        <img
          src={refreshIcon}
          alt="refresh"
          className="middle-icon"
          onClick={getMail}
        />
      </div>

      <div className="mail-list">
        {filteredMails.length > 0 ? (
          filteredMails.map((mail) => (
            <div
              key={mail.id}
              className="mail-row"
              onMouseEnter={() => setHoveredId(mail.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={mail.starred ? yellowStar : starIcon}
                alt="star"
                className="mail-icon"
                onClick={() => starMail(mail)}
              />
              <span className="mail-sender">{mail.sender}</span>
              <span className="mail-subject">{mail.email}</span>
              {hoveredId === mail.id && (
                <span className="mail-actions">
                  <img
                    src={snoozeIcon}
                    alt="snooze"
                    className="mail-icon"
                    onClick={() => snoozeMail(mail)}
                  />
                  <img
                    src={trashIcon}
                    alt="delete"
                    className="mail-icon"
                    onClick={() => deleteMail(mail)}
                  />
                </span>
              )}
              <span className="mail-date">Today</span>
            </div>
          ))
        ) : (
          <p className="empty-text">No messages found.</p>
        )}
      </div>

      <p className="middle-footer">Terms · Privacy · Program Policies</p>
    </div>
  );
}

export default Middle;
