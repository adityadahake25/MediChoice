import React from "react";
import "../DoctorDashboard/dashboard.css";

const Patients = () => {
  return (
    <div className="page-container">
      <h2>Patients</h2>

      <input
        type="text"
        placeholder="Search patient..."
        className="search-input"
      />

      <div className="card">
        <div className="patient-row">
          <strong>Rahul Mehta</strong>
          <span>Cardiology</span>
        </div>

        <div className="patient-row">
          <strong>Priya Kapoor</strong>
          <span>ECG Follow-up</span>
        </div>

        <div className="patient-row">
          <strong>Amit Verma</strong>
          <span>BP Monitoring</span>
        </div>

        <div className="patient-row">
          <strong>Neha Singh</strong>
          <span>Heart Specialist</span>
        </div>
      </div>
    </div>
  );
};

export default Patients;
