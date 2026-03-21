import "./Features.css";
import {
  ShieldCheck,
  Clock,
  BrainCircuit,
  BarChart3,
  Smartphone,
  HandHeart,
} from "lucide-react";

const featuresData = [
  {
    icon: ShieldCheck,
    title: "Verified Doctors",
    desc: "Every doctor is verified with credentials, certifications, and patient reviews.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Get round-the-clock support for appointments and medical queries.",
  },
  {
    icon: BrainCircuit,
    title: "AI Cost Estimator",
    desc: "Get smart, data-driven cost predictions for treatments across hospitals before booking.",
  },
  {
    icon: BarChart3,
    title: "Hospital Comparison",
    desc: "Compare hospitals by cost, success rate, and ratings to choose the best option.",
  },
  {
    icon: Smartphone,
    title: "Instant Booking",
    desc: "Book appointments instantly with real-time availability.",
  },
  {
    icon: HandHeart,
    title: "Medical Fundraiser",
    desc: "Request financial support for treatments or donate to help patients in need through a secure platform.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features-section">
      <div className="features-header">
        <span className="features-tag">FEATURES</span>
        <h2>
          Everything You Need <br /> for Better Healthcare
        </h2>
        <p>
          MediChoice makes healthcare simple, transparent, and accessible for
          everyone.
        </p>
      </div>

      <div className="features-grid">
        {featuresData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
