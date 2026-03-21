import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import Translate from "../components/Translate/Translate.jsx";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  /* ================= CHECK LOGIN STATUS ================= */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(storedUser);
  }, [location]);

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="MediChoice Logo" />
        <h2 className="logo-text">MediChoice</h2>
      </Link>

      {/* ================= MENU ================= */}
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/hospitals">Top Hospitals</Link>
        </li>

        <li>
          <Link to="/domain">Domain</Link>
        </li>

        <li>
          <Link to="/treatment-options">Treatments</Link>
        </li>

        <li>
          <Link to="/estimate">AI Estimator</Link>
        </li>

        <li>
          <Link to="/fundraiser">Fundraiser</Link>
        </li>

        <li>
          <Link to="/EMI">EMI Predictor</Link>
        </li>
      </ul>

      {/* ================= RIGHT SIDE ================= */}
      <div className="nav-buttons">
        <div className="language-wrapper">
          <Translate />
        </div>

        {userInfo ? (
          <>
            <span className="welcome-text-box">Hello, {userInfo.name}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
