import "./LoginModal.css";

function LoginModal({ show, close }) {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-box">
                <h2>Login</h2>
                <input placeholder="Email" />
                <input placeholder="Password" type="password" />
                <button className="btn">Login</button>
                <button onClick={close}>Close</button>
            </div>
        </div>
    );
}

export default LoginModal;
