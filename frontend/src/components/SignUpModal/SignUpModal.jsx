import { useState } from "react";
import "./SignupModal.css";

export default function SignupModal({ onClose }) {
    const [role, setRole] = useState("patient");

    return (
        <div className="auth-overlay">
            <div className="auth-box">

                <h2 className="blue-text">Welcome to MediChoice</h2>
                <p className="center-text">Create Your Account</p>

                {/* ROLE BUTTONS */}
                <div className="role-buttons">
                    <button
                        className={role === "patient" ? "role-btn active" : "role-btn"}
                        onClick={() => setRole("patient")}
                    >
                        PATIENT
                    </button>

                    <button
                        className={role === "doctor" ? "role-btn active" : "role-btn"}
                        onClick={() => setRole("doctor")}
                    >
                        DOCTOR
                    </button>
                </div>

                {/* FORM SCROLL AREA */}
                <div className="form-scroll">

                    {/* COMMON FIELDS */}
                    <input placeholder="First Name" />
                    <input placeholder="Middle Name" />
                    <input placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input placeholder="Mobile Number" />

                    <select>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    <input type="date" />

                    {/* PATIENT FIELDS */}
                    {role === "patient" && (
                        <>
                            <select>
                                <option>Blood Group</option>
                                <option>A+</option><option>A-</option>
                                <option>B+</option><option>B-</option>
                                <option>O+</option><option>O-</option>
                                <option>AB+</option><option>AB-</option>
                            </select>

                            <input placeholder="Address" />
                            <input placeholder="City" />

                            <select>
                                <option>State</option>
                                <option>Maharashtra</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Tamil Nadu</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Uttar Pradesh</option>
                                <option>Punjab</option>
                                <option>Bihar</option>
                                <option>West Bengal</option>
                            </select>

                            <input placeholder="Pincode" />
                        </>
                    )}

                    {/* DOCTOR FIELDS */}
                    {role === "doctor" && (
                        <>
                            <input placeholder="Specialization" />
                            <input placeholder="Qualification" />
                            <input placeholder="Years of Experience" />
                            <input placeholder="Hospital Name" />

                            <select>
                                <option>ID Proof Type</option>
                                <option>Aadhar Card</option>
                                <option>PAN Card</option>
                                <option>Driving License</option>
                            </select>

                            <input placeholder="Medical Council Registration Number" />
                            <input type="file" />

                            <select>
                                <option>Consultation Mode</option>
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Both</option>
                            </select>

                            <input placeholder="Consultation Fee (₹)" />
                        </>
                    )}

                </div>

                <button className="auth-btn">Create Account</button>
                <p onClick={onClose} className="close-btn">Close</p>

            </div>
        </div>
    );
}
