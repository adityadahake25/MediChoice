import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Upload } from "lucide-react";
import "./Step.css";

export default function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, reports: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    if (!formData.disease || !formData.hospital || !formData.amount) {
      setError("Please fill all fields");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="step-wrapper">
      <h2>Medical Details</h2>

      <div className="input-group">
        <input
          type="text"
          name="disease"
          placeholder=" "
          value={formData.disease}
          onChange={handleChange}
        />
        <label>Disease / Condition</label>
      </div>

      <div className="input-group">
        <input
          type="text"
          name="hospital"
          placeholder=" "
          value={formData.hospital}
          onChange={handleChange}
        />
        <label>Hospital Name</label>
      </div>

      <div className="input-group">
        <input
          type="number"
          name="amount"
          placeholder=" "
          value={formData.amount}
          onChange={handleChange}
        />
        <label>Target Amount (₹)</label>
      </div>

      <div className="input-group">
        <textarea
          name="description"
          placeholder=" "
          value={formData.description}
          onChange={handleChange}
        />
        <label>Describe the condition</label>
      </div>

      <label className="upload-box">
        <Upload size={18} />
        {formData.reports ? formData.reports.name : "Upload Medical Reports"}
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleChange}
          hidden
        />
      </label>

      {error && <span className="error">{error}</span>}

      <div className="btn-group">
        <button className="secondary-btn" onClick={prevStep}>
          <ArrowLeft size={16} /> Back
        </button>

        <button className="primary-btn" onClick={validate}>
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
