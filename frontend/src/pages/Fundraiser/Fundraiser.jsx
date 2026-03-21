import React, { useState, useRef } from "react";
import {
  User,
  Phone,
  HeartPulse,
  Upload,
  IndianRupee,
  ArrowLeft,
  Heart,
  CreditCard,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./Fundraiser.css";

const Fundraiser = () => {
  const [mode, setMode] = useState("fundraiser");
  const [step, setStep] = useState(1);

  const [goalAmount, setGoalAmount] = useState(100000);
  const [raisedAmount, setRaisedAmount] = useState(25000);

  const [donorName, setDonorName] = useState("");
  const [donorMobile, setDonorMobile] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donorMessage, setDonorMessage] = useState("");

  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const fileInputRef = useRef(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const progress = (step / 3) * 100;
  const fundingPercent = (raisedAmount / goalAmount) * 100;

  const chartData = [
    { name: "Raised", value: raisedAmount },
    { name: "Remaining", value: goalAmount - raisedAmount },
  ];

  const handleDummyPayment = () => {
    setTimeout(() => {
      setRaisedAmount((prev) => prev + Number(donationAmount));
      setPaymentSuccess(true);

      setTimeout(() => {
        setShowPayment(false);
        setPaymentSuccess(false);
        setDonationAmount("");
        setDonorName("");
        setDonorMobile("");
        setDonorMessage("");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fundraiser-container">
      <h1 className="page-title">Medical Crowdfunding</h1>

      {/* MODE SWITCH */}
      <div className="mode-switch">
        <button
          className={mode === "fundraiser" ? "active-mode" : ""}
          onClick={() => setMode("fundraiser")}
        >
          I Want Funds
        </button>
        <button
          className={mode === "donor" ? "active-mode" : ""}
          onClick={() => setMode("donor")}
        >
          I Want to Donate
        </button>
      </div>

      {/* ================= FUNDRAISER ================= */}
      {mode === "fundraiser" && (
        <>
          <div className="progress-wrapper">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="stepper">
            <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <div className="form-card">
            {step === 1 && (
              <>
                <h2>Your Details</h2>
                <div className="form-group">
                  <label>
                    <User size={16} /> Full Name
                  </label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>
                    <Phone size={16} /> Mobile
                  </label>
                  <input type="tel" placeholder="Enter mobile number" />
                </div>
                <button className="next-btn" onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Patient Details</h2>
                <div className="form-group">
                  <label>
                    <HeartPulse size={16} /> Disease
                  </label>
                  <input type="text" placeholder="Enter condition" />
                </div>

                <div className="form-group">
                  <label>
                    <IndianRupee size={16} /> Goal Amount
                  </label>
                  <input
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                  />
                </div>

                <div
                  className="upload-box"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Upload size={16} /> Upload Medical Proof
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden-file-input"
                />

                <div className="button-row">
                  <button className="back-btn" onClick={prevStep}>
                    Back
                  </button>
                  <button className="next-btn" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Campaign Preview</h2>
                <div className="summary-box">
                  <p>Goal: ₹{goalAmount}</p>
                  <p>Raised: ₹{raisedAmount}</p>
                  <p>Funding: {fundingPercent.toFixed(1)}%</p>
                </div>

                <div className="chart-section">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="button-row">
                  <button className="back-btn" onClick={prevStep}>
                    <ArrowLeft size={14} /> Edit
                  </button>
                  <button className="submit-btn">Publish Campaign</button>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* ================= DONOR MODE ================= */}
      {mode === "donor" && (
        <div className="form-card donor-card">
          <h2>Support This Campaign ❤️</h2>

          <div className="summary-box">
            <p>Goal: ₹{goalAmount}</p>
            <p>Raised: ₹{raisedAmount}</p>
            <p>Funding: {fundingPercent.toFixed(1)}%</p>
          </div>

          <div className="form-group">
            <label>
              <User size={16} /> Donor Name
            </label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>
              <Phone size={16} /> Mobile Number
            </label>
            <input
              type="tel"
              value={donorMobile}
              onChange={(e) => setDonorMobile(e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-group">
            <label>
              <IndianRupee size={16} /> Donation Amount
            </label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <input
              type="text"
              value={donorMessage}
              onChange={(e) => setDonorMessage(e.target.value)}
              placeholder="Send your wishes"
            />
          </div>

          <button className="donate-btn" onClick={() => setShowPayment(true)}>
            <CreditCard size={16} /> Proceed to Pay
          </button>
        </div>
      )}

      {/* ================= DUMMY PAYMENT MODAL ================= */}
      {showPayment && (
        <div className="payment-overlay">
          <div className="payment-modal">
            {!paymentSuccess ? (
              <>
                <h3>Dummy Payment Gateway</h3>
                <p>Pay ₹{donationAmount}</p>
                <button className="pay-btn" onClick={handleDummyPayment}>
                  Pay Now
                </button>
              </>
            ) : (
              <div className="success-animation">
                <h3>Payment Successful 🎉</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fundraiser;
