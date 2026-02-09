import "./Hero.css";
import bg from "../../assets/bg.jpeg";

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay">
                <h1>Make Smart Healthcare Decisions with MediChoice</h1>
                <p>Compare treatment costs, hospital ratings, and patient experiences before making your healthcare options.</p>
                <button className="hero-btn">Explore Treatments</button>
            </div>
        </div>
    );
}

export default Hero;
