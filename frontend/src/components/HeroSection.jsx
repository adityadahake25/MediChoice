import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import bgImage from "../assets/bg3.jpeg";

const suggestions = [
  "Heart Bypass Surgery",
  "Knee Replacement",
  "Cancer Treatment",
  "Apollo Hospitals Pune",
  "MRI Scan",
  "Cardiology Specialists",
  "Affordable IVF Treatment",
  "Top Neurology Hospitals",
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const navigate = useNavigate(); // ✅ added
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  /* SCROLL ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add("show"),
      { threshold: 0.35 },
    );

    heroRef.current && observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* SEARCH SUGGESTIONS */
  useEffect(() => {
    setFiltered(
      query
        ? suggestions.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase()),
          )
        : [],
    );
  }, [query]);

  /* HANDLE SEARCH */
  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/hospitals?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/hospitals");
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero scroll-hidden"
      style={{
        backgroundImage: `linear-gradient(
          rgba(2, 6, 23, 0.4),
          rgba(2, 6, 23, 0.4)
        ), url(${bgImage})`,
      }}
    >
      <div className="hero-content floating">
        <h1>
          Make Smarter <br />
          Healthcare <span>Decisions</span>
        </h1>

        <p>
          Compare treatment costs, hospital ratings, and trusted patient
          experiences to confidently choose the best healthcare option for you.
        </p>

        <div className="search-wrapper glow">
          <div className="search-box">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search disease, treatment, hospital..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {filtered.length > 0 && (
            <ul className="suggestions">
              {filtered.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    navigate(`/hospitals?search=${encodeURIComponent(item)}`);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
