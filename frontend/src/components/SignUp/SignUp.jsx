import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

export default function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    hospital: "",
    city: "",
    state: "",
    specialization: "",
    experience: "",
    consultation: "",
    education: "",
    certifications: "",
    services: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
        role,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <h2>Create Your Account</h2>
        <p className="subtitle">Join MediChoice platform</p>

        {/* Role Selector */}
        <div className="role-selector">
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

        <form onSubmit={handleSubmit} className="signup-form">
          {/* ===== BASIC INFO ===== */}
          <div className="grid-2">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          {/* ===== DOCTOR EXTRA FIELDS ===== */}
          {role === "doctor" && (
            <>
              <div className="grid-2">
                <input
                  name="hospital"
                  placeholder="Hospital Name"
                  onChange={handleChange}
                />
                <input name="city" placeholder="City" onChange={handleChange} />
              </div>

              <select name="state" onChange={handleChange}>
                <option value="">Select State</option>
                {indianStates.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <div className="grid-2">
                <input
                  name="specialization"
                  placeholder="Specialization"
                  onChange={handleChange}
                />
                <input
                  name="experience"
                  placeholder="Experience (Years)"
                  onChange={handleChange}
                />
              </div>

              <select name="consultation" onChange={handleChange}>
                <option value="">Consultation Mode</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Both</option>
              </select>

              <textarea
                name="education"
                placeholder="Education Details"
                onChange={handleChange}
              ></textarea>
              <textarea
                name="certifications"
                placeholder="Certifications"
                onChange={handleChange}
              ></textarea>
              <textarea
                name="services"
                placeholder="Services Offered"
                onChange={handleChange}
              ></textarea>
            </>
          )}

          {/* PASSWORDS */}
          <div className="grid-2">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
