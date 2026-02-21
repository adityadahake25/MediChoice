import React, { useState, useEffect } from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import "./Step.css";

export default function StepThree({ formData, prevStep }) {
  const [raised, setRaised] = useState(0);

  // Simulated Live Progress Animation
  useEffect(() => {
    let interval = setInterval(() => {
      setRaised((prev) => (prev < formData.amount * 0.4 ? prev + 5000 : prev));
    }, 200);

    return () => clearInterval(interval);
  }, [formData.amount]);

  const percent = Math.min((raised / formData.amount) * 100, 100);

  const shareWhatsApp = () => {
    const text = `Help ${formData.patientName} fight ${formData.disease}. Donate here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="campaign-preview">
      <h2>Campaign Preview</h2>

      <div className="preview-card">
        <h3>{formData.patientName}</h3>
        <p>
          <strong>Disease:</strong> {formData.disease}
        </p>
        <p>
          <strong>Hospital:</strong> {formData.hospital}
        </p>

        {/* Live Progress */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>

        <p className="amount-text">
          Raised ₹{raised.toLocaleString()} of ₹{formData.amount}
        </p>

        <button className="donate-btn">Donate Now</button>

        <div className="share-section">
          <button onClick={shareWhatsApp}>WhatsApp</button>
          <button onClick={copyLink}>Copy Link</button>
        </div>
      </div>

      <button className="secondary-btn" onClick={prevStep}>
        <ArrowLeft size={16} /> Back
      </button>
    </div>
  );
}
