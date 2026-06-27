import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  MapPin,
  Phone,
  Clock,
  Star,
  GraduationCap,
  Award,
  Stethoscope,
  Users,
  Calendar,
} from "lucide-react";

import "./ShowDoctor.css";

const tabs = ["About", "Education", "Expertise", "Reviews"];

const ShowDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/doctors/${id}`);
        const data = await res.json();

        console.log("Doctor Data:", data);
        console.log("_id:", data._id);
        console.log("doctor_id:", data.doctor_id);

        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctor();
  }, [id]);

  if (!doctor) return <div className="loading">Loading Doctor...</div>;

  return (
    <div className="doctor-page">
      {/* HERO */}
      <div className="doctor-hero">
        <div className="doctor-image">
          <img
            src={`http://localhost:5000${doctor.image}`}
            alt={doctor.doctor_name}
          />
        </div>

        <div className="doctor-info">
          <h1>{doctor.doctor_name}</h1>
          <p className="specialization">{doctor.specialization}</p>

          <div className="hero-meta">
            <span>
              <Users size={16} /> {doctor.patients_treated}+ Patients
            </span>
            <span>
              <Clock size={16} /> {doctor.experience_years} Years Experience
            </span>
          </div>

          <div className="hospital">
            <MapPin size={16} />
            {doctor.hospital?.hospital_name}, {doctor.hospital?.city}
          </div>

          <div className="rating">
            <Star size={16} fill="#fbbc04" stroke="#fbbc04" />
            {doctor.avg_rating} ({doctor.total_reviews} reviews)
          </div>

          <div className="fee-pill">
            ₹ {doctor.consultation_fee} Consultation Fee
          </div>

          {/* AVAILABLE DAYS */}
          <div className="days">
            <Calendar size={16} />
            {doctor.availability?.days.map((day, i) => (
              <span key={i} className="day-pill">
                {day.slice(0, 3)}
              </span>
            ))}
          </div>

          <p className="timing">{doctor.availability?.timings}</p>

          <button onClick={() => navigate(`/book/${doctor._id}`)}>
            Book Appointment
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === "About" && (
        <div className="section-card">
          <h3>About Doctor</h3>
          <p>{doctor.about}</p>
        </div>
      )}

      {activeTab === "Education" && (
        <div className="section-card">
          <h3>
            <GraduationCap size={18} /> Education
          </h3>
          <ul>
            {doctor.education.map((edu, i) => (
              <li key={i}>
                <strong>{edu.degree}</strong> – {edu.institute} ({edu.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "Expertise" && (
        <div className="section-card">
          <h3>
            <Stethoscope size={18} /> Expertise
          </h3>
          <div className="service-tags">
            {doctor.services.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div className="section-card">
          <h3>Patient Reviews</h3>
          <p>⭐ {doctor.avg_rating} average rating</p>
        </div>
      )}

      {/* CONTACT */}
      <div className="section-card">
        <h3>
          <Phone size={18} /> Contact
        </h3>
        <p>{doctor.contact_number}</p>
      </div>
    </div>
  );
};

export default ShowDoctor;
