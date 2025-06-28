// File: src/Components/LiveChat.jsx
import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import "../Styles/LiveChat.css";

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { sender: "ai", text: data.reply }]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <div className="chat-toggle-btn" onClick={toggleChat}>
        {isOpen ? <FaTimes size={22} /> : <FaCommentDots size={22} />}
      </div>

      <div className={`chat-box ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <div className="chat-header">💬 Chat with us</div>
            <div className="chat-body">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LiveChat;
