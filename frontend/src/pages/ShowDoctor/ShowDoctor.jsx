import { useParams } from "react-router-dom";
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
} from "lucide-react";

import "./ShowDoctor.css";

const ShowDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/doctors/${id}`);
        const data = await res.json();
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
      {/* HERO SECTION */}
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

          <div className="rating">
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            {doctor.avg_rating} ({doctor.total_reviews} reviews)
          </div>

          <div className="meta">
            <span>
              <Users size={16} /> {doctor.patients_treated}+ Patients
            </span>
            <span>
              <Clock size={16} /> {doctor.experience_years} Years Experience
            </span>
          </div>

          <div className="hospital">
            <MapPin size={16} />
            {doctor.hospital?.hospital_name} – {doctor.hospital?.city}
          </div>

          <div className="fee">
            Consultation Fee: ₹{doctor.consultation_fee}
          </div>

          <button className="book-btn">Book Appointment</button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="section-card">
        <h3>About Doctor</h3>
        <p>{doctor.about}</p>
      </div>

      {/* EDUCATION */}
      <div className="section-card">
        <h3>
          <GraduationCap size={18} /> Education
        </h3>
        <ul>
          {doctor.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> – {edu.institute} ({edu.year})
            </li>
          ))}
        </ul>
      </div>

      {/* CERTIFICATIONS */}
      <div className="section-card">
        <h3>
          <Award size={18} /> Certifications
        </h3>
        <ul>
          {doctor.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      {/* SERVICES */}
      <div className="section-card">
        <h3>
          <Stethoscope size={18} /> Services
        </h3>
        <div className="service-tags">
          {doctor.services.map((service, index) => (
            <span key={index}>{service}</span>
          ))}
        </div>
      </div>

      {/* AVAILABILITY */}
      <div className="section-card">
        <h3>
          <Clock size={18} /> Availability
        </h3>
        <p>{doctor.availability?.days.join(", ")}</p>
        <p>{doctor.availability?.timings}</p>
      </div>

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
