

<nav className="navbar">
    <div className="nav-left">
        <img src={logo} alt="logo" />
        <h2>Medichoice</h2>
    </div>

    <div className="nav-right">
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button className="signup" onClick={() => setShowSignup(true)}>
            Signup
        </button>
    </div>
</nav>
