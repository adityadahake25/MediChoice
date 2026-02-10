import "../styles/hero.css";
import bgImage from "../assets/bg.jpeg";
import SearchBar from "../components/SearchBar";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>
                    Make Smarter <br />
                    Healthcare <span>Decisions</span>
                </h1>

                <p>
                    Compare treatment costs, hospital ratings, and patient experiences before choosing the right healthcare option.
                </p>

                <div className="search-box">
                    <input type="text" placeholder="Search disease, treatment, hospital..." />
                    <button>Search</button>
                </div>
            </div>

            <div className="hero-right">
                <img src={bgImage} alt="Healthcare background" />
            </div>
        </section>
    );
}
