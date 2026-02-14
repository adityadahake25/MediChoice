import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation, Users } from "lucide-react";
import "./ShowHospital.css";

const ShowHospital = () => {
  const { id } = useParams();

  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);

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

    const fetchDoctors = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/doctors/hospital/${id}`,
        );
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospital();
    fetchDoctors();
  }, [id]);

  if (!hospital) return <div className="loading">Loading...</div>;

  return (
    <div className="hospital-page">
      {/* HERO SECTION */}
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
            {hospital.location?.city}, {hospital.location?.state}
          </div>

          <div className="hero-rating">
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            {hospital.ratings?.avg_rating}
          </div>

          <p className="hospital-description">{hospital.description}</p>

          <div className="hero-extra-info">
            <div className="extra-item">
              <Users size={18} />
              {hospital.hospital_stats?.total_doctors} Doctors
            </div>

            <div className="extra-item">
              <MapPin size={18} />
              {hospital.location?.address}
            </div>
          </div>

          <div className="facility-preview">
            {hospital.facilities?.map((facility, index) => (
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

          <Link to={`/doctors?hospital=${id}`}>
            <button className="all-doctors-btn">View All Doctors</button>
          </Link>
        </div>

        {/* DOCTOR ROW */}
        <div className="doctor-row">
          {doctors.length === 0 ? (
            <p>No doctors available for this hospital.</p>
          ) : (
            doctors.slice(0, 4).map((doctor) => (
              <Link
                to={`/doctors/${doctor._id}`}
                key={doctor._id}
                style={{ textDecoration: "none" }}
              >
                <div className="doctor-card">
                  <img
                    src={`http://localhost:5000${doctor.image}`}
                    alt={doctor.doctor_name}
                  />

                  <h4>{doctor.doctor_name}</h4>
                  <p>{doctor.specialization}</p>
                  <span>{doctor.experience_years} Years Experience</span>

                  <div className="doctor-rating">
                    <Star size={14} fill="#ff9800" stroke="#ff9800" />
                    {doctor.avg_rating}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* CONTACT CARD */}
        <div className="contact-card">
          <div className="contact-row">
            <MapPin size={18} />
            <span>{hospital.location?.address}</span>
          </div>

          <div className="contact-row">
            <Phone size={18} />
            <span>{hospital.contact?.phone}</span>
          </div>

          <div className="contact-row">
            <Clock size={18} />
            <span>
              {hospital.timing?.opening_time} - {hospital.timing?.closing_time}
            </span>
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
