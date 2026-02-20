import React from "react";
import "../DoctorDashboard/Dashboard.css";

const Schedule = () => {
  return (
    <div className="page-container">
      <h2>Doctor Schedule</h2>

      <div className="card">
        <h3>Today's Schedule</h3>

        <div className="schedule-item">
          <span>09:30 AM</span>
          <p>Rahul Mehta – Heart Checkup</p>
        </div>

        <div className="schedule-item">
          <span>12:30 PM</span>
          <p>Priya Kapoor – ECG Test</p>
        </div>

        <div className="schedule-item">
          <span>02:00 PM</span>
          <p>Amit Verma – Blood Pressure</p>
        </div>

        <div className="schedule-item">
          <span>04:30 PM</span>
          <p>Neha Singh – Cardiac Review</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
