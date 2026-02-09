import "./Navbar.css";
import logo from "../../assets/medichoice-logo.jpeg";

function Navbar({ openLogin, openSignup }) {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src={logo} className="logo" />
                <h2>MediChoice</h2>
            </div>

            <div className="nav-center">
                <a>Home</a>
                <a>How it Works</a>
                <a>Features</a>
                <a>About</a>
            </div>

            <div className="nav-right">
                <button className="btn" onClick={openLogin}>Login</button>
                <button className="btn" onClick={openSignup}>Signup</button>
            </div>
        </nav>
    );
}

export default Navbar;
