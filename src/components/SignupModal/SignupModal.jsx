import { useState } from "react";
import "./SignupModal.css";

function SignupModal({ show, close }) {
    const [role, setRole] = useState("patient");

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-box signup-box">
                <h2>Create Account</h2>

                {/* Role Selection */}
                <div className="role-select">
                    <label>
                        <input
                            type="radio"
                            value="patient"
                            checked={role === "patient"}
                            onChange={() => setRole("patient")}
                        />
                        Patient
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="doctor"
                            checked={role === "doctor"}
                            onChange={() => setRole("doctor")}
                        />
                        Doctor
                    </label>
                </div>

                {/* Common Fields */}
                <div className="grid">
                    <input placeholder="First Name" />
                    <input placeholder="Middle Name" />
                    <input placeholder="Last Name" />
                    <input placeholder="Email" />
                    <input placeholder="Mobile Number" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input placeholder="Age" type="number" />
                </div>

                <select>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>

                <select>
                    <option>Select State</option>
                    <option>Maharashtra</option>
                    <option>Gujarat</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Rajasthan</option>
                    <option>Uttar Pradesh</option>
                    <option>Delhi</option>
                    <option>West Bengal</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Bihar</option>
                    <option>Madhya Pradesh</option>
                    <option>Odisha</option>
                    <option>Telangana</option>
                    <option>Andhra Pradesh</option>
                    <option>Kerala</option>
                    <option>Chhattisgarh</option>
                    <option>Jharkhand</option>
                    <option>Assam</option>
                    <option>Goa</option>
                    <option>Himachal Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>Tripura</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Nagaland</option>
                    <option>Sikkim</option>
                    <option>Arunachal Pradesh</option>
                </select>

                <input placeholder="City" />
                <input placeholder="Address" />
                <input placeholder="Pincode" />

                {/* Doctor Extra Fields */}
                {role === "doctor" && (
                    <>
                        <h3 className="sub-heading">Doctor Details</h3>

                        <input placeholder="Degree (MBBS, MD, etc.)" />
                        <input placeholder="Specialization" />
                        <input placeholder="Hospital / Clinic Name" />
                        <input placeholder="Years of Experience" type="number" />
                        <input placeholder="Medical Licence Number" />
                        <input placeholder="Medical Registration Number" />

                        <select>
                            <option>Identity Proof</option>
                            <option>PAN Card</option>
                            <option>Aadhar Card</option>
                            <option>Voter ID</option>
                            <option>Driving License</option>
                        </select>

                        <label className="file-label">
                            Upload Degree Certificate
                            <input type="file" />
                        </label>

                        <label className="file-label">
                            Upload Hospital / Clinic Proof
                            <input type="file" />
                        </label>

                        <label className="file-label">
                            Upload Identity Proof
                            <input type="file" />
                        </label>
                    </>
                )}

                <button className="btn submit-btn">Create Account</button>
                <button className="close-btn" onClick={close}>Close</button>
            </div>
        </div>
    );
}

export default SignupModal;
