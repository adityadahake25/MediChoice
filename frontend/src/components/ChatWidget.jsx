import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown"; // Added for clean formatting
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I am your medical assistant. How can I help you find a doctor or hospital today?" }
  ]);
  const [input, setInput] = useState("");
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });
      
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (err) {
      console.error("Chatbot connection error:", err);
      setMessages((prev) => [
        ...prev, 
        { role: "bot", content: "I'm having trouble connecting. Is the server running?" }
      ]);
    }
  };

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <img src="/Medibot.jpeg" alt="Bot" className="bot-img-small" />
            <span>Medical Assistant</span>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`message ${msg.role}`}
                // whiteSpace: "pre-wrap" is kept for user messages 
                style={{ whiteSpace: "pre-wrap" }}
              >
                {/* ReactMarkdown renders **text** as <strong> and * as <li> */}
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about doctors in Pune..." 
            />
            <button onClick={handleSend} className="send-btn">Send</button>
          </div>
        </div>
      )}

      <button className="chat-toggle-circle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>
    </div>
  );
};

export default ChatWidget;