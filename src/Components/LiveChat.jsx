import React, { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../Styles/LiveChat.css";

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatBodyRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = { sender: "user", text: trimmedInput };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!res.ok) {
        throw new Error(`Failed to get response (Status: ${res.status})`);
      }

      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
      } else {
        throw new Error("No reply from server");
      }
    } catch (err) {
      console.error("Chat error:", err);
      setError("Failed to get response. Please try again.");
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "I'm having trouble responding. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="live-chat-container">
      <button 
        className={`chat-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FaTimes size={20} /> : <FaCommentDots size={20} />}
      </button>

      <div className={`chat-box ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <div className="chat-header">
              <span>Health Assistant</span>
              <button 
                className="close-btn" 
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`chat-message ${msg.sender}`}
                  aria-label={`${msg.sender} message`}
                >
                  {msg.text}
                </div>
              ))}
              
              {isLoading && (
                <div className="chat-message ai loading">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-footer">
              {error && <div className="chat-error">{error}</div>}
              <div className="input-container">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your health question..."
                  disabled={isLoading}
                  aria-label="Type your message"
                />
                <button 
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LiveChat;