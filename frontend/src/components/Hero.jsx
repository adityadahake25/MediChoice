import "../styles/Hero.css";
import background from "../assets/bg3.jpeg";


function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-content">
                <h1>Make Smarter Healthcare Decisions</h1>
                <p>
                    Compare treatments, doctors, and hospitals with trusted medical
                    insights.
                </p>
            </div>
        </section>
    );
}

export default Hero;
