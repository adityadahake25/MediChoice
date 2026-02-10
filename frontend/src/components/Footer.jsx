import "./Footer.css";
import { Phone, Mail, MapPin, Plus } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-brand">
                    <div className="logo">
                        <Plus size={20} />
                        <span>MediChoice</span>
                    </div>

                    <p>
                        Your trusted partner in finding the best healthcare. Compare
                        hospitals, Compare treatments cost, book doctors, and get the care you deserve.
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
                </div>

                {/* Company */}
                <div className="footer-links">
                    <h4>COMPANY</h4>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                </div>

                {/* Services */}
                <div className="footer-links">
                    <h4>SERVICES</h4>
                    <a href="#">Find Hospitals</a>
                    <a href="#">Book Doctors</a>
                    <a href="#">Treatments</a>
                    <a href="#">Health Plans</a>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h4>SUPPORT</h4>
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>

            {/* Bottom Bar */}
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
