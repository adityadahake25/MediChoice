import { Search, BarChart3, CalendarCheck, HeartPulse } from "lucide-react";
import "../styles/howitworks.css";

export default function HowItWorks() {
  return (
    <section className="howworks-section" id="how-it-works">

      <p className="howworks-tag">HOW IT WORKS</p>
      <h2 className="howworks-title">Your Health Journey, Simplified</h2>
      <p className="howworks-desc">
        Getting the care you need has never been easier. Follow these four simple steps.
      </p>

      <div className="howworks-grid">

        {/* CARD 1 */}
        <div className="howworks-card">
          <span className="howworks-number">01</span>
          <div className="howworks-icon">
            <Search size={22} />
          </div>
          <h3>Search</h3>
          <p>Find the best hospitals and doctors by location or treatment.</p>
        </div>

        {/* CARD 2 */}
        <div className="howworks-card">
          <span className="howworks-number">02</span>
          <div className="howworks-icon">
            <BarChart3 size={22} />
          </div>
          <h3>Compare</h3>
          <p>Review costs, ratings, and patient experiences easily.</p>
        </div>

        {/* CARD 3 */}
        <div className="howworks-card">
          <span className="howworks-number">03</span>
          <div className="howworks-icon">
            <CalendarCheck size={22} />
          </div>
          <h3>Book</h3>
          <p>Schedule your appointment instantly with top hospitals.</p>
        </div>

        {/* CARD 4 */}
        <div className="howworks-card">
          <span className="howworks-number">04</span>
          <div className="howworks-icon">
            <HeartPulse size={22} />
          </div>
          <h3>Get Care</h3>
          <p>Visit your chosen provider and receive quality treatment.</p>
        </div>

      </div>
    </section>
  );
}
