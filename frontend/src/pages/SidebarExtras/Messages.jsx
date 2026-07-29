import React from "react";
import "../DoctorDashboard/dashboard.css";

const Messages = () => {
  return (
    <div className="page-container">
      <h2>Messages</h2>

      <div className="card chat-box">
        <div className="message received">
          <p>Hello Doctor, I have chest pain.</p>
        </div>

        <div className="message sent">
          <p>Please schedule ECG test tomorrow.</p>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
