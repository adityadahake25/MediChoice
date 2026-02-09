import "./LoginModal.css";

export default function LoginModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <span className="close-btn" onClick={onClose}>×</span>

                <h2>Welcome Back</h2>
                <p className="subtitle">Login to MediChoice</p>

                <form className="modal-form">
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />

                    <button className="primary-btn">Login</button>
                </form>
            </div>
        </div>
    );
}
