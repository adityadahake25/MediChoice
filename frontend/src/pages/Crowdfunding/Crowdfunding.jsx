import React, { useState } from "react";
import "./Crowdfunding.css";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

export default function Crowdfunding() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    disease: "",
    hospital: "",
    amount: "",
    description: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <div className="cf-container">
      <h1 className="cf-heading">Start Medical Fundraiser</h1>
      <p className="cf-sub">Raise funds for treatment in 3 easy steps</p>

      {/* STEP INDICATOR */}
      <div className="cf-steps">
        <div className={`cf-step ${step >= 1 && "active"}`}>
          <div className="circle">1</div>
          <span>Patient Info</span>
        </div>

        <div className={`cf-step ${step >= 2 && "active"}`}>
          <div className="circle">2</div>
          <span>Medical Details</span>
        </div>

        <div className={`cf-step ${step >= 3 && "active"}`}>
          <div className="circle">3</div>
          <span>Preview</span>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="cf-card">
        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            nextStep={next}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            nextStep={next}
            prevStep={prev}
          />
        )}

        {step === 3 && <StepThree formData={formData} prevStep={prev} />}
      </div>
    </div>
  );
}
