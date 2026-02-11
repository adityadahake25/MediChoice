import "./Features.css";
import {
  ShieldCheck,
  Clock,
  Users,
  Star,
  Smartphone,
  FileText,
} from "lucide-react";

const featuresData = [
  {
    icon: <ShieldCheck />,
    title: "Verified Doctors",
    desc: "Every doctor is verified with credentials, certifications, and patient reviews.",
  },
  {
    icon: <Clock />,
    title: "24/7 Support",
    desc: "Get round-the-clock support for appointments and medical queries.",
  },
  {
    icon: <Users />,
    title: "Family Profiles",
    desc: "Manage health records and appointments for your entire family.",
  },
  {
    icon: <Star />,
    title: "Genuine Reviews",
    desc: "Read honest patient reviews to choose the best healthcare provider.",
  },
  {
    icon: <Smartphone />,
    title: "Instant Booking",
    desc: "Book appointments instantly with real-time availability.",
  },
  {
    icon: <FileText />,
    title: "Digital Records",
    desc: "Access prescriptions and reports anytime securely.",
  },
];

const Features = () => {
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
        {featuresData.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
