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
  const [declaration, setDeclaration] = useState(false);

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
    medicalRegistrationNumber: "",
    medicalCouncil: "",
    registrationYear: "",
    qualification: "",
  });

  const [files, setFiles] = useState({
    license: null,
    degree: null,
    idProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles({ ...files, [e.target.name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (role === "doctor") {
      if (!files.license || !files.degree || !files.idProof) {
        alert("All documents are required!");
        return;
      }

      if (!declaration) {
        alert("Please accept the declaration.");
        return;
      }
    }

    const formPayload = new FormData();

    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    formPayload.append("role", role);

    if (role === "doctor") {
      formPayload.append("license", files.license);
      formPayload.append("degree", files.degree);
      formPayload.append("idProof", files.idProof);
    }

    const res = await fetch(
      "https://medichoice-backend.onrender.com/api/auth/signup",
      {
        method: "POST",
        body: formPayload,
      },
    );

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

        {/* ROLE SELECTOR */}
        <div className="role-selector">
          <button
            type="button"
            className={role === "patient" ? "active" : ""}
            onClick={() => setRole("patient")}
          >
            Patient
          </button>
          <button
            type="button"
            className={role === "doctor" ? "active" : ""}
            onClick={() => setRole("doctor")}
          >
            Doctor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* BASIC INFO */}
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

          {/* DOCTOR SECTION */}
          {role === "doctor" && (
            <>
              <div className="section-title">Professional Information</div>

              <div className="grid-2">
                <input
                  name="hospital"
                  placeholder="Hospital Name"
                  onChange={handleChange}
                  required
                />
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  required
                />
              </div>

              <select name="state" onChange={handleChange} required>
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
                  required
                />
                <input
                  name="experience"
                  placeholder="Experience (Years)"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid-2">
                <input
                  name="medicalRegistrationNumber"
                  placeholder="Medical Registration Number"
                  onChange={handleChange}
                  required
                />
                <input
                  name="registrationYear"
                  type="number"
                  placeholder="Year of Registration"
                  onChange={handleChange}
                  required
                />
              </div>

              <select name="medicalCouncil" onChange={handleChange} required>
                <option value="">State Medical Council</option>
                <option>Maharashtra Medical Council</option>
                <option>Delhi Medical Council</option>
                <option>Karnataka Medical Council</option>
                <option>Tamil Nadu Medical Council</option>
              </select>

              <input
                name="qualification"
                placeholder="Qualification (MBBS / MD / MS)"
                onChange={handleChange}
                required
              />

              {/* UPLOAD SECTION */}
              <div className="section-title">Upload Documents</div>

              {["license", "degree", "idProof"].map((type) => (
                <div className="file-upload" key={type}>
                  <label>
                    {type === "license" && "Medical License Certificate *"}
                    {type === "degree" && "Degree Certificate *"}
                    {type === "idProof" && "Government ID Proof *"}
                  </label>

                  <label className="upload-box">
                    <input
                      type="file"
                      name={type}
                      accept=".pdf,image/*"
                      onChange={handleFileChange}
                      required
                    />
                    {files[type] ? (
                      <div className="file-success">✓ {files[type].name}</div>
                    ) : (
                      <span>
                        <strong>Click to upload</strong> or drag & drop (PDF /
                        Image)
                      </span>
                    )}
                  </label>
                </div>
              ))}

              {/* DECLARATION */}
              <div className="declaration-box">
                <input
                  type="checkbox"
                  checked={declaration}
                  onChange={() => setDeclaration(!declaration)}
                />
                <span>
                  I declare that the information provided is accurate and I am a
                  registered medical practitioner.
                </span>
              </div>
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
