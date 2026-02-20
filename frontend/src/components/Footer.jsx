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
import logo from "../assets/logo.png"; // make sure logo is in assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ===== Brand Section ===== */}
        <div className="footer-brand">
          <div className="logo-section">
            <img src={logo} alt="MediChoice Logo" className="footer-logo" />
            <h2>MediChoice</h2>
          </div>

          <p>
            Your trusted partner in finding the best healthcare. Compare
            hospitals, treatment costs, book doctors, and get the care you
            deserve.
          </p>

          <ul className="contact">
            <li>
              <Phone size={16} /> +91 7766889943
            </li>
            <li>
              <Mail size={16} /> hello@medichoice.com
            </li>
            <li>
              <MapPin size={16} /> India, IN 40006
            </li>
          </ul>

          {/* Social Media */}
          <div className="social-icons">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* ===== Company ===== */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>

        {/* ===== Services ===== */}
        <div className="footer-links">
          <h4>SERVICES</h4>
          <a href="#">Find Hospitals</a>
          <a href="#">Book Doctors</a>
          <a href="#">Treatments</a>
          <a href="#">Health Plans</a>
        </div>

        {/* ===== Support ===== */}
        <div className="footer-links">
          <h4>SUPPORT</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <p>© 2026 MediChoice. All rights reserved.</p>

        <div className="bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
