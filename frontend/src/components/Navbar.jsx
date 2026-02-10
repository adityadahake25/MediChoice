import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo Section */}
            <div className="logo">
                <img src={logo} alt="MediChoice Logo" />
                <h2>MediChoice</h2>
            </div>

            {/* Utility Menu */}
            <ul className="menu">
                <li>Home</li>
                <li>How It Works</li>
                <li>Features</li>
                <li>Top Hospitals</li>
                <li>Treatments</li>
                <li>Testimonials</li>
                <li>About</li>
            </ul>

            {/* Buttons */}
            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>

        </nav>
    );
}
