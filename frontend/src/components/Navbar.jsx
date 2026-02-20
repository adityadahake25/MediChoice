import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  /* ================= CHECK LOGIN STATUS ================= */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(storedUser);
  }, [location]); // 🔥 updates when route changes

  /* ================= SMOOTH SCROLL ================= */
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Menu */}
      <ul className="menu">
        <li>
          <Link to="/" onClick={() => scrollToSection("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#how-it-works"
            onClick={() => scrollToSection("how-it-works")}
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/#features-section"
            onClick={() => scrollToSection("features-section")}
          >
            Features
          </Link>
        </li>
        <li>
          <Link to="/hospitals">Top Hospitals</Link>
        </li>
        <li>
          <Link to="/compare">Compare</Link>
        </li>
        <li>
          <Link
            to="/#treatments-section"
            onClick={() => scrollToSection("treatments-section")}
          >
            Treatments
          </Link>
        </li>
        <li>
          <Link
            to="/#testimonials-section"
            onClick={() => scrollToSection("testimonials-section")}
          >
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="/doctor-dashboard">Doctor Dashboard</Link>
        </li>

        <li>
          <Link to="/#footer" onClick={() => scrollToSection("footer")}>
            About
          </Link>
        </li>
      </ul>

      {/* ================= AUTH BUTTONS ================= */}
      <div className="nav-buttons">
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
