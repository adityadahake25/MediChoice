import "./SignupModal.css";
import { useState } from "react";

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function SignupModal({ onClose }) {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState("patient");
    const [errors, setErrors] = useState({});

    const validateStep1 = () => {
        const newErrors = {};
        if (!document.getElementById("email").value)
            newErrors.email = "Email required";
        if (!document.getElementById("password").value)
            newErrors.password = "Password required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="modal-overlay">
            <div className="signup-card">
                <span className="close-btn" onClick={onClose}>×</span>

                <h2>Welcome to MediChoice</h2>
                <p className="subtitle">Step {step} of 3</p>

                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <div className="role-switch">
                            <button
                                className={role === "patient" ? "active" : ""}
                                onClick={() => setRole("patient")}
                            >
                                Patient
                            </button>
                            <button
                                className={role === "doctor" ? "active" : ""}
                                onClick={() => setRole("doctor")}
                            >
                                Doctor
                            </button>
                        </div>

                        <div className="floating-group">
                            <input id="email" required />
                            <label>Email</label>
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="floating-group">
                            <input id="password" type="password" required />
                            <label>Password</label>
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <button className="next-btn" onClick={() => validateStep1() && setStep(2)}>
                            Next
                        </button>
                    </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <div className="form-grid">
                            <div className="floating-group">
                                <input required />
                                <label>First Name</label>
                            </div>

                            <div className="floating-group">
                                <input required />
                                <label>Last Name</label>
                            </div>

                            <div className="floating-group">
                                <input required />
                                <label>City</label>
                            </div>

                            <div className="floating-group">
                                <select required>
                                    <option value=""></option>
                                    {states.map(s => <option key={s}>{s}</option>)}
                                </select>
                                <label>State</label>
                            </div>
                        </div>

                        <div className="wizard-actions">
                            <button onClick={() => setStep(1)}>Back</button>
                            <button onClick={() => setStep(3)}>Next</button>
                        </div>
                    </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <>
                        {role === "doctor" && (
                            <>
                                <h4>Doctor Verification</h4>
