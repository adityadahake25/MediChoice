import React, { useState } from "react";
import "./EMICard.css";

const EMICard = () => {
  // Initialized with 12,000 Rupees
  const [amount, setAmount] = useState(12000);
  const [tenure, setTenure] = useState(12);
  const interestRate = 8.5;

  const monthlyRate = interestRate / 12 / 100;
  const emiValue =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  const emi = Math.round(emiValue);

  // Helper to format in Indian Currency Style (₹)
  const formatRupees = (num) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="emi-card">
      <div className="emi-header">
        <div className="emi-icon">
          <span className="material-icons">calculate</span>
        </div>
        <h2>EMI & Affordability</h2>
      </div>

      <div className="emi-inputs">
        <div className="input-group-div">
          <label htmlFor="amount">Total Amount (₹)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </div>

        <div className="input-group-div">
          <label htmlFor="tenure">Tenure</label>
          <select
            id="tenure"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          >
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
            <option value={24}>24 months</option>
          </select>
        </div>
      </div>

      <div className="emi-display">
        <p className="emi-label">MONTHLY EMI</p>
        {/* Symbol changed to ₹ and using Indian formatting */}
        <h1 className="emi-amount">₹{isNaN(emi) ? 0 : formatRupees(emi)}</h1>
        <p className="emi-rate">@ {interestRate}% annual rate</p>
      </div>

      <div className="emi-badge insurance-badge">
        <span className="material-icons-outlined">verified_user</span>
        Insurance Eligible — Covers up to 80%
      </div>
    </div>
  );
};

export default EMICard;
