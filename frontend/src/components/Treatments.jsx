import "./Treatments.css";
import { Clock, IndianRupee, ArrowRight } from "lucide-react";

import Cardiology from "../assets/Cardiology.jpeg";
import Dermatology from "../assets/Dermatology.jpeg";
import Neurology from "../assets/Neurology.jpeg";
import Orthopedic from "../assets/Orthopedic.jpeg";

const treatments = [
    {
        title: "Cardiology",
        description:
            "Comprehensive heart care including diagnosis, angioplasty, bypass surgery and preventive cardiology.",
        duration: "1–3 hours",
        price: "5,000",
        procedures: "12 procedures",
        image: Cardiology,
    },
    {
        title: "Dermatology",
        description:
            "Advanced skin, hair and nail treatments including acne care, laser therapy and cosmetic procedures.",
        duration: "30 min – 2 hrs",
        price: "1,500",
        procedures: "20 procedures",
        image: Dermatology,
    },
    {
        title: "Neurology",
        description:
            "Expert diagnosis and treatment for brain, spine and nervous system disorders using modern imaging.",
        duration: "1–5 hours",
        price: "7,000",
        procedures: "10 procedures",
        image: Neurology,
    },
    {
        title: "Orthopedic",
        description:
            "Complete bone and joint care including fractures, joint replacement and sports injury treatment.",
        duration: "2–4 hours",
        price: "6,000",
        procedures: "18 procedures",
        image: Orthopedic,
    },
];

const Treatments = () => {
    return (
        <section className="treatments-section">
            {/* Header */}
            <div className="treatments-header">
                <span className="tag">POPULAR TREATMENTS</span>
                <h2>Explore Treatment Options</h2>
                <p>
                    Browse our most popular treatments and find the right care for your
                    needs.
                </p>
            </div>

            {/* Cards */}
            <div className="treatments-grid">
                {treatments.map((item, index) => (
                    <div className="treatment-card" key={index}>
                        <div className="treatment-image">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>

                        <div className="treatment-content">
                            <p className="description">{item.description}</p>

                            <div className="info">
                                <span>
                                    <Clock size={14} /> {item.duration}
                                </span>
                                <span>
                                    <IndianRupee size={14} /> From {item.price}
                                </span>
                            </div>

                            <div className="card-footer">
                                <span className="procedures">{item.procedures}</span>
                                <button className="learn-more">
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔽 Explore More Treatments */}
            <div className="explore-more">
                <span>Explore more treatment options</span>
                <ArrowRight size={18} />
            </div>
        </section>
    );
};

export default Treatments;
