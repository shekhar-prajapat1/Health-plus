import React, { useState } from "react";
import axios from "axios";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "You", text: message };
    setChat([...chat, userMsg]);

    try {
      const res = await axios.post("http://localhost:5000/chat", { message });
      const botReply = { sender: "AI", text: res.data.reply };
      setChat((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Error:", err);
    }

    setMessage("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>🧠 AI Health Chat</h2>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          background: "#f9f9f9",
        }}
      >
        {chat.map((msg, i) => (
          <p key={i}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        style={{ width: "80%", padding: "10px", marginTop: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
