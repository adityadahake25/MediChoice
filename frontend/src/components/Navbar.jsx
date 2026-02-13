import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

// Import Modals

import LoginModal from "./LoginModal/LoginModal";
import SignupModal from "./SignUpModal/SignUpModal.jsx";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo" href="/">
          <img src={logo} alt="MediChoice Logo" href="/" />
          <h2 href="/">MediChoice</h2>
        </div>

        {/* Menu */}
        <ul className="menu">
          <a href="/">Home</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#features-section">Features</a>
          <Link to="/hospitals">Top Hospitals</Link>
          <a href="/#treatments-section">Treatments</a>
          <a href="/#testimonials-section">Testimonials</a>
          <a href="/#footer">About</a>
        </ul>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Login
          </button>

          <button className="signup-btn" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* Signup Modal */}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </>
  );
}
