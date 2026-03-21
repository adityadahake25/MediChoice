import React from "react";
import "./TreatmentInfo.css";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Stethoscope,
  Activity,
  ShieldAlert,
  Clock,
  IndianRupee,
  Building2,
} from "lucide-react";

/* ================= CORRECT IMAGE IMPORTS ================= */

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

const treatmentsData = {
  cardiologist: {
    title: "Cardiology",
    image: Cardiology,
    about:
      "Heart specialists diagnose chest pain, BP problems and blocked arteries.",
    procedures: [
      "ECG",
      "2D Echo",
      "Angiography",
      "Angioplasty",
      "Bypass Surgery",
    ],
    preparation: "Avoid heavy meals and bring previous reports.",
    precautions: "Avoid oily food and smoking after procedure.",
    recovery: "2 – 6 weeks",
    cost: "₹50,000 – ₹2,50,000",
    hospitals: ["Apollo Hospital", "Fortis Hospital", "Manipal Hospital"],
  },

  dermatologist: {
    title: "Dermatology",
    image: Dermatology,
    about: "Skin specialist for acne, pigmentation and laser procedures.",
    procedures: ["Acne Treatment", "Laser Therapy", "Chemical Peel"],
    preparation: "Do not apply creams before visit.",
    precautions: "Avoid sun exposure after treatment.",
    recovery: "2 – 10 days",
    cost: "₹1,000 – ₹25,000",
    hospitals: ["Kaya Clinic", "Skin City Hospital", "Apollo Clinic"],
  },

  neurologist: {
    title: "Neurology",
    image: Neurology,
    about: "Brain and nerve specialist for migraine, seizures and stroke.",
    procedures: ["EEG", "MRI Brain", "Stroke Care"],
    preparation: "Carry MRI/CT reports.",
    precautions: "Avoid stress and follow medication.",
    recovery: "1 – 8 weeks",
    cost: "₹20,000 – ₹1,50,000",
    hospitals: ["Ruby Hall Clinic", "Jehangir Hospital", "Fortis Hospital"],
  },

  orthopedic: {
    title: "Orthopedic",
    image: Orthopedic,
    about: "Bone and joint doctor for fractures and arthritis.",
    procedures: ["X-Ray", "Joint Replacement", "Physiotherapy"],
    preparation: "Wear loose clothes.",
    precautions: "Avoid heavy lifting.",
    recovery: "4 – 12 weeks",
    cost: "₹40,000 – ₹3,00,000",
    hospitals: ["Sancheti Hospital", "Fortis Hospital", "Manipal Hospital"],
  },

  gynecologist: {
    title: "Gynecology",
    image: Gynecologist,
    about: "Women's health specialist for pregnancy and PCOS care.",
    procedures: ["Pregnancy Scan", "PCOS Treatment", "Normal Delivery"],
    preparation: "Carry previous reports.",
    precautions: "Regular checkups required.",
    recovery: "1 – 6 weeks",
    cost: "₹10,000 – ₹1,20,000",
    hospitals: ["Cloudnine Hospital", "Apollo Clinic", "Motherhood Hospital"],
  },

  pediatrician: {
    title: "Pediatrician",
    image: Pediatrician,
    about: "Child specialist for vaccination and growth monitoring.",
    procedures: ["Vaccination", "Growth Check", "Child Fever Treatment"],
    preparation: "Bring vaccination card.",
    precautions: "Maintain hygiene.",
    recovery: "1 – 5 days",
    cost: "₹500 – ₹5,000",
    hospitals: ["Rainbow Hospital", "Cloudnine", "Apollo Clinic"],
  },

  gastroenterologist: {
    title: "Gastroenterology",
    image: Gastroenterologist,
    about: "Digestive system specialist for acidity, ulcers and liver issues.",
    procedures: ["Endoscopy", "Colonoscopy", "Liver Test"],
    preparation: "Fasting required.",
    precautions: "Avoid spicy food.",
    recovery: "2 – 7 days",
    cost: "₹5,000 – ₹60,000",
    hospitals: ["Ruby Hall", "Fortis", "Manipal"],
  },

  oncologist: {
    title: "Oncology",
    image: Oncologist,
    about: "Cancer specialist for diagnosis and chemotherapy.",
    procedures: ["Biopsy", "Chemotherapy", "Radiation Therapy"],
    preparation: "Carry reports.",
    precautions: "Avoid infections.",
    recovery: "Varies",
    cost: "₹50,000 – ₹5,00,000",
    hospitals: ["Tata Memorial", "Jehangir Hospital", "Apollo"],
  },

  psychiatrist: {
    title: "Psychiatrist",
    image: Psychiatrist,
    about: "Mental health specialist for anxiety and depression.",
    procedures: ["Counselling", "Therapy Sessions"],
    preparation: "Share symptoms honestly.",
    precautions: "Follow regular therapy.",
    recovery: "2 – 12 weeks",
    cost: "₹1,000 – ₹10,000",
    hospitals: ["Mindcare Clinic", "Apollo", "Fortis"],
  },

  ophthalmologist: {
    title: "Ophthalmology",
    image: Ophthalmologist,
    about: "Eye specialist for vision and LASIK surgery.",
    procedures: ["Eye Test", "LASIK", "Cataract Surgery"],
    preparation: "Avoid lenses before test.",
    precautions: "Wear sunglasses after surgery.",
    recovery: "2 – 14 days",
    cost: "₹10,000 – ₹80,000",
    hospitals: ["ASG Eye Hospital", "Apollo", "Centre For Sight"],
  },

  endocrinologist: {
    title: "Endocrinology",
    image: Endocrinologist,
    about: "Hormone specialist for thyroid and diabetes.",
    procedures: ["Thyroid Test", "Diabetes Management"],
    preparation: "Fasting blood test.",
    precautions: "Diet control required.",
    recovery: "Ongoing",
    cost: "₹1,000 – ₹15,000",
    hospitals: ["Apollo", "Fortis", "Ruby Hall"],
  },

  ent: {
    title: "ENT Specialist",
    image: ENT,
    about: "Ear, nose and throat doctor for sinus and hearing issues.",
    procedures: ["Hearing Test", "Sinus Surgery", "Tonsil Removal"],
    preparation: "Avoid ear drops.",
    precautions: "Avoid cold exposure.",
    recovery: "1 – 3 weeks",
    cost: "₹5,000 – ₹70,000",
    hospitals: ["Sancheti", "Apollo", "Fortis"],
  },
};

/* ================= COMPONENT ================= */

export default function TreatmentInfo() {
  const { slug } = useParams();
  const data = treatmentsData[slug];

  if (!data) return <h2 style={{ padding: 40 }}>Treatment Not Found</h2>;

  return (
    <section className="treatment-info">
      <div className="info-container">
        <img src={data.image} alt={data.title} className="info-image" />

        <div className="info-content">
          <h1>{data.title}</h1>
          <p className="about">{data.about}</p>

          <div className="section">
            <h3>
              <Activity size={18} /> Common Procedures
            </h3>
            <ul>
              {data.procedures.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>
              <Stethoscope size={18} /> Preparation
            </h3>
            <p>{data.preparation}</p>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <ShieldAlert size={20} />
              <h4>Precautions</h4>
              <p>{data.precautions}</p>
            </div>

            <div className="info-card">
              <Clock size={20} />
              <h4>Recovery</h4>
              <p>{data.recovery}</p>
            </div>

            <div className="info-card">
              <IndianRupee size={20} />
              <h4>Cost</h4>
              <p>{data.cost}</p>
            </div>
          </div>

          <div className="section">
            <h3>
              <Building2 size={18} /> Available Hospitals
            </h3>
            <div className="hospital-list">
              {data.hospitals.map((h, i) => (
                <div key={i} className="hospital-item">
                  {h}
                </div>
              ))}
            </div>
          </div>

          <Link to="/estimate" className="ai-btn">
            Get AI Cost Estimate <Brain size={18} /> <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
