import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MediChoice Logo" />
        <h2>MediChoice</h2>
      </div>

      <ul className="menu">
        <a href="/">Home</a>
        <a href="/#how-it-works">How It Works</a>
        <a href="/#features-section">Features</a>
        <Link to="/hospitals">Top Hospitals</Link>
        <a href="/#treatments-section">Treatments</a>
        <a href="/#testimonials-section">Testimonials</a>
        <a href="/#footer">About</a>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
