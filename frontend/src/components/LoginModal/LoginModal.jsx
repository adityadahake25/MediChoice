import "./LoginModal.css";

export default function LoginModal({ onClose }) {
    return (
        <div className="auth-overlay">
            <div className="auth-box">
                <h2 className="blue-text">Login to MediChoice</h2>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="auth-btn">Login</button>

                <p onClick={onClose} className="close-btn">Close</p>
            </div>
        </div>
    );
}
