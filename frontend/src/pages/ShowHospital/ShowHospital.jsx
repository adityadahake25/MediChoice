import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation, Users } from "lucide-react";

import "./ShowHospital.css";

const ShowHospital = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/hospitals/${id}`);
        const data = await res.json();
        setHospital(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospital();
  }, [id]);

  if (!hospital) return <div className="loading">Loading...</div>;

  return (
    <div className="hospital-page">
      {/* HERO CARD */}
      <div className="hero-card">
        <div className="hero-image">
          <img
            src={`http://localhost:5000${hospital.image}`}
            alt={hospital.hospital_name}
          />
        </div>

        <div className="hero-info">
          <h1>{hospital.hospital_name}</h1>

          <div className="hero-location">
            <MapPin size={18} />
            {hospital.city}, {hospital.state}
          </div>

          <div className="hero-rating">
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            {hospital.avg_rating}
          </div>

          <p className="hospital-description">
            {hospital.hospital_name} is a trusted healthcare institution
            providing advanced medical services with modern technology and
            compassionate patient care.
          </p>

          <div className="hero-extra-info">
            <div className="extra-item">
              <Users size={18} />
              {hospital.total_doctors} Doctors
            </div>

            <div className="extra-item">
              <MapPin size={18} />
              {hospital.address}
            </div>
          </div>

          <div className="facility-preview">
            {hospital.facilities.map((facility, index) => (
              <span key={index} className="facility-tag">
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* DOCTOR HEADER */}
        <div className="doctor-header">
          <h3 className="section-title">Top Doctors</h3>
          <button className="all-doctors-btn">View Doctors</button>
        </div>

        {/* DOCTOR ROW */}
        <div className="doctor-row">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="doctor-card" key={index}>
              <img
                src={`https://randomuser.me/api/portraits/${
                  index % 2 === 0 ? "men" : "women"
                }/${30 + index}.jpg`}
                alt="doctor"
              />
              <h4>Dr. Sample {index + 1}</h4>
              <p>Specialist</p>
              <span>20+ years</span>

              <div className="doctor-rating">
                <Star size={14} fill="#ff9800" stroke="#ff9800" />
                4.{7 + index}
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT CARD */}
        <div className="contact-card">
          <div className="contact-row">
            <MapPin size={18} />
            <span>{hospital.address}</span>
          </div>

          <div className="contact-row">
            <Phone size={18} />
            <span>{hospital.contact_number}</span>
          </div>

          <div className="contact-row">
            <Clock size={18} />
            <span>Open 24/7</span>
          </div>

          <button className="primary-btn">Book Appointment</button>

          <button className="location-btn">
            <Navigation size={18} />
            Get Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowHospital;
