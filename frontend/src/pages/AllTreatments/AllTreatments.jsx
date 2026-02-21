import "./AllTreatments.css";
import { Clock, IndianRupee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= CORRECT IMPORTS ================= */

import Cardiology from "../../assets/cardiology.jpeg";
import Dermatology from "../../assets/dermatology.jpeg";
import Neurology from "../../assets/neurology.jpeg";
import Orthopedic from "../../assets/orthopedic.jpeg";

import Gynecologist from "../../assets/Gynecologist.jpeg";
import Pediatrician from "../../assets/pediatrics.jpeg";
import Gastroenterologist from "../../assets/Gastroenterologist.png";
import Oncologist from "../../assets/oncology.jpeg";
import Psychiatrist from "../../assets/Psychiatrist.png";
import Ophthalmologist from "../../assets/Ophthalmologist.jpeg";
import Endocrinologist from "../../assets/Endocrinologist.png";
import ENT from "../../assets/ENT Specialist.png";

/* ================= DATA ================= */

const treatments = [
  {
    title: "Cardiologist",
    slug: "cardiologist",
    image: Cardiology,
    price: "5,000",
    duration: "1–3 hours",
    procedures: "12 procedures",
  },
  {
    title: "Dermatologist",
    slug: "dermatologist",
    image: Dermatology,
    price: "1,500",
    duration: "30 min – 2 hrs",
    procedures: "20 procedures",
  },
  {
    title: "Neurologist",
    slug: "neurologist",
    image: Neurology,
    price: "7,000",
    duration: "1–5 hours",
    procedures: "10 procedures",
  },
  {
    title: "Orthopedic",
    slug: "orthopedic",
    image: Orthopedic,
    price: "6,000",
    duration: "2–4 hours",
    procedures: "18 procedures",
  },
  {
    title: "Gynecologist",
    slug: "gynecologist",
    image: Gynecologist,
    price: "3,500",
    duration: "30–60 min",
    procedures: "8 procedures",
  },
  {
    title: "Pediatrician",
    slug: "pediatrician",
    image: Pediatrician,
    price: "800",
    duration: "15–30 min",
    procedures: "6 procedures",
  },
  {
    title: "Gastroenterologist",
    slug: "gastroenterologist",
    image: Gastroenterologist,
    price: "4,000",
    duration: "1–2 hours",
    procedures: "14 procedures",
  },
  {
    title: "Oncologist",
    slug: "oncologist",
    image: Oncologist,
    price: "9,000",
    duration: "2–6 hours",
    procedures: "22 procedures",
  },
  {
    title: "Psychiatrist",
    slug: "psychiatrist",
    image: Psychiatrist,
    price: "1,200",
    duration: "30–60 min",
    procedures: "5 procedures",
  },
  {
    title: "Ophthalmologist",
    slug: "ophthalmologist",
    image: Ophthalmologist,
    price: "1,000",
    duration: "20–40 min",
    procedures: "9 procedures",
  },
  {
    title: "Endocrinologist",
    slug: "endocrinologist",
    image: Endocrinologist,
    price: "2,500",
    duration: "30–90 min",
    procedures: "11 procedures",
  },
  {
    title: "ENT Specialist",
    slug: "ent",
    image: ENT,
    price: "1,300",
    duration: "20–45 min",
    procedures: "7 procedures",
  },
];

/* ================= COMPONENT ================= */

export default function AllTreatments() {
  return (
    <section className="alltreatments-section">
      <div className="alltreatments-header">
        <span className="tag">ALL SPECIALITIES</span>
        <h2>Find Doctors By Speciality</h2>
        <p>Select a department and consult the best doctors near you</p>
      </div>

      <div className="alltreatments-grid">
        {treatments.map((item, index) => (
          <div className="alltreatment-card" key={index}>
            <div className="alltreatment-image">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>

            <div className="alltreatment-content">
              <div className="info">
                <span>
                  <Clock size={14} /> {item.duration}
                </span>
                <span>
                  <IndianRupee size={14} /> From ₹{item.price}
                </span>
              </div>

              <div className="card-footer">
                <span className="procedures">{item.procedures}</span>

                <Link
                  to={`/treatments/${item.slug}`}
                  className="learn-more-btn"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
