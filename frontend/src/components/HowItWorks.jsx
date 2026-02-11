import "../styles/howitworks.css";
import { Search, BarChart3, CalendarCheck, HeartPulse } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <p className="section-tag">HOW IT WORKS</p>
      <h2>Your Health Journey, Simplified</h2>
      <p className="section-desc">
        Getting the care you need has never been easier. Follow these four
        simple steps.
      </p>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-card">
          <span className="step-number">01</span>
          <div className="icon">
            <Search size={28} />
          </div>
          <h3>Search</h3>
          <p>Find the best hospitals and doctors by location or treatment.</p>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <span className="step-number">02</span>
          <div className="icon">
            <BarChart3 size={28} />
          </div>
          <h3>Compare</h3>
          <p>Review costs, ratings, and patient experiences.</p>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <span className="step-number">03</span>
          <div className="icon">
            <CalendarCheck size={28} />
          </div>
          <h3>Book</h3>
          <p>Schedule your appointment instantly with top hospitals.</p>
        </div>

        {/* Step 4 */}
        <div className="step-card">
          <span className="step-number">04</span>
          <div className="icon">
            <HeartPulse size={28} />
          </div>
          <h3>Get Care</h3>
          <p>Visit your chosen provider and receive quality treatment.</p>
        </div>
      </div>
    </section>
  );
}
