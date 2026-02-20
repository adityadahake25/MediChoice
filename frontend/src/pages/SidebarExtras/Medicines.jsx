import React from "react";
import "../DoctorDashboard/Dashboard.css";

const Medicines = () => {
  return (
    <div className="page-container">
      <h2>Medicine Inventory</h2>

      <div className="medicine-grid">
        <div className="card medicine-card">
          <h4>Aspirin</h4>
          <p>Stock: 120 strips</p>
        </div>

        <div className="card medicine-card">
          <h4>Atorvastatin</h4>
          <p>Stock: 85 strips</p>
        </div>

        <div className="card medicine-card">
          <h4>Metoprolol</h4>
          <p>Stock: 60 strips</p>
        </div>

        <div className="card medicine-card">
          <h4>Clopidogrel</h4>
          <p>Stock: 140 strips</p>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
