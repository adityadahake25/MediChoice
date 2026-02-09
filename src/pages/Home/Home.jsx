import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import LoginModal from "../../components/LoginModal/LoginModal";
import SignupModal from "../../components/SignupModal/SignupModal";

function Home() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    return (
        <>
            <Navbar
                openLogin={() => setLoginOpen(true)}
                openSignup={() => setSignupOpen(true)}
            />

            <Hero />

            <LoginModal show={loginOpen} close={() => setLoginOpen(false)} />
            <SignupModal show={signupOpen} close={() => setSignupOpen(false)} />
        </>
    );
}

export default Home;
