import React, { useState, useEffect } from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import "./Step.css";

export default function StepThree({ formData, prevStep }) {
  const [raised, setRaised] = useState(0);

  const target = Number(formData.amount) || 1;

  useEffect(() => {
    let interval = setInterval(() => {
      setRaised((prev) => (prev < target * 0.4 ? prev + target * 0.02 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, [target]);

  const percent = Math.min((raised / target) * 100, 100);

  const shareWhatsApp = () => {
    const text = `Help ${formData.patientName} fight ${formData.disease}. Donate now!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Campaign link copied!");
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
        <p className="description">{formData.description}</p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>

        <p className="amount-text">
          Raised ₹{Math.floor(raised).toLocaleString()} of ₹
          {target.toLocaleString()}
        </p>

        <button className="donate-btn">Donate Now</button>

        <div className="share-section">
          <button onClick={shareWhatsApp}>
            <Share2 size={16} /> WhatsApp
          </button>
          <button onClick={copyLink}>Copy Link</button>
        </div>
      </div>

      <button className="secondary-btn" onClick={prevStep}>
        <ArrowLeft size={16} /> Back
      </button>
    </div>
  );
}
