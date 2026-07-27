import "./Footer.css";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ================= Main Footer ================= */}

      <div className="footer-container">
        {/* ===== Brand ===== */}

        <div className="footer-brand">
          <div className="logo-section">
            <img src={logo} alt="MediChoice Logo" className="footer-logo" />
            <h2>MediChoice</h2>
          </div>

          <p>
            Helping users compare hospitals, explore doctors, estimate treatment
            costs, and make informed healthcare decisions through an AI-powered
            platform.
          </p>

          <ul className="contact">
            <li>
              <Mail size={16} />
              dahakeaditya25@gmail.com
            </li>

            <li>
              <MapPin size={16} />
              Maharashtra, India
            </li>
          </ul>

          <div className="social-icons">
            <a href="#">
              <Facebook size={18} />
            </a>
            <a href="#">
              <Instagram size={18} />
            </a>
            <a href="#">
              <Twitter size={18} />
            </a>
            <a href="#">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* ===== Company ===== */}

        <div className="footer-links">
          <h4>COMPANY</h4>

          <a href="#">About MediChoice</a>
          <a href="#">Features</a>
          <a href="#">AI Assistant</a>
          <a href="#">Crowdfunding</a>
        </div>

        {/* ===== Services ===== */}

        <div className="footer-links">
          <h4>SERVICES</h4>

          <a href="#">Find Hospitals</a>
          <a href="#">Compare Hospitals</a>
          <a href="#">Find Doctors</a>
          <a href="#">Cost Estimator</a>
        </div>

        {/* ===== Support ===== */}

        <div className="footer-links">
          <h4>SUPPORT</h4>

          <a href="#">AI Chatbot</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>

      {/* ================= Disclaimer ================= */}

      <div className="footer-disclaimer">
        <p>
          <strong>⚠️ Disclaimer:</strong> MediChoice is a personal portfolio
          project developed for educational and demonstration purposes. While
          some hospital names correspond to real healthcare organizations, all
          associated information—including doctor profiles, ratings, reviews,
          treatment costs, appointments, availability, and other displayed
          information—is fictional and intended solely to demonstrate the
          application's features. This project is not affiliated with, endorsed
          by, or representative of any hospital or healthcare organization.
        </p>
      </div>

      {/* ================= Bottom ================= */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MediChoice. All rights reserved.</p>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
