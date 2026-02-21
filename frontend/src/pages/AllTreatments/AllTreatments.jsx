import "../../components/Treatments.css";
import { Clock, IndianRupee, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* Import Images */
import Cardiology from "../../assets/Cardiology.jpeg";
import Dermatology from "../../assets/Dermatology.jpeg";
import Neurology from "../../assets/Neurology.jpeg";
import Orthopedic from "../../assets/Orthopedic.jpeg";

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
      "Advanced skin, hair and nail treatments including acne care and laser therapy.",
    duration: "30 min – 2 hrs",
    price: "1,500",
    procedures: "20 procedures",
    image: Dermatology,
  },
  {
    title: "Neurology",
    description:
      "Expert diagnosis and treatment for brain and nervous system disorders.",
    duration: "1–5 hours",
    price: "7,000",
    procedures: "10 procedures",
    image: Neurology,
  },
  {
    title: "Orthopedic",
    description:
      "Complete bone and joint care including fractures and replacements.",
    duration: "2–4 hours",
    price: "6,000",
    procedures: "18 procedures",
    image: Orthopedic,
  },
  {
    title: "Gynecology",
    description:
      "Women’s healthcare including pregnancy and reproductive treatments.",
    duration: "1–2 hours",
    price: "3,000",
    procedures: "15 procedures",
    image: Dermatology,
  },
  {
    title: "Pediatrician",
    description:
      "Specialized healthcare for infants, children and adolescents.",
    duration: "30–60 mins",
    price: "1,000",
    procedures: "8 procedures",
    image: Cardiology,
  },
  {
    title: "Gastroenterology",
    description:
      "Digestive system treatments including endoscopy and liver care.",
    duration: "1–3 hours",
    price: "4,000",
    procedures: "14 procedures",
    image: Neurology,
  },
  {
    title: "Oncology",
    description:
      "Cancer diagnosis and treatment including chemotherapy and radiation.",
    duration: "Varies",
    price: "10,000",
    procedures: "25 procedures",
    image: Orthopedic,
  },
  {
    title: "Psychiatrist",
    description:
      "Mental health support including therapy and medication management.",
    duration: "45 mins",
    price: "2,000",
    procedures: "6 procedures",
    image: Dermatology,
  },
  {
    title: "Ophthalmologist",
    description: "Eye care services including LASIK and cataract surgery.",
    duration: "30–90 mins",
    price: "3,500",
    procedures: "9 procedures",
    image: Cardiology,
  },
  {
    title: "Endocrinologist",
    description:
      "Hormone and diabetes management with advanced care solutions.",
    duration: "1 hour",
    price: "2,500",
    procedures: "7 procedures",
    image: Neurology,
  },
  {
    title: "ENT Specialist",
    description:
      "Ear, nose and throat treatments including sinus and hearing care.",
    duration: "30–60 mins",
    price: "1,800",
    procedures: "11 procedures",
    image: Orthopedic,
  },
];

const AllTreatments = () => {
  const navigate = useNavigate();

  return (
    <section className="treatments-section">
      <div className="treatments-header">
        <span className="tag">ALL TREATMENTS</span>
        <h2>Explore All Treatment Options</h2>
        <p>
          Browse all available medical specialties and choose the best care
          option for you.
        </p>
      </div>

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
                <button
                  className="learn-more"
                  onClick={() => navigate(`/hospitals?specialty=${item.title}`)}
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTreatments;
