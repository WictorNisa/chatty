"use client";

import { useState } from "react";
import { auth, firestore } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage() {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(firestore, "messages"), {
        text: message,
        uid: auth.currentUser.uid, // Associates the message with the current user
        createdAt: serverTimestamp(), // Server-side timestamp to maintain consistency
      });
      setMessage(""); //clear the input field after sending
    }
  };
  return (
    <form onSubmit={sendMessage}>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
