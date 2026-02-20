import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Navigation,
  Users,
  BedDouble,
  Activity,
  Building2,
  Ambulance,
  ShieldCheck,
  Loader,
} from "lucide-react";
import "./ShowHospital.css";
import Map from "../../components/Map/Map.jsx";

const ShowHospital = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);

  // 🔥 Review form state
  const [patientName, setPatientName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [showLocationView, setShowLocationView] = useState(false);
  const [locationMode, setLocationMode] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

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

  useEffect(() => {
    fetchHospital();
    fetchDoctors();
  }, [id]);

  // 🔥 Submit Review
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      alert("Please login first");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/hospitals/${id}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          rating,
          comment,
        }),
      },
    );

    const data = await res.json();

    if (res.ok) {
      alert("Review added successfully");
      fetchHospital(); // 🔥 refresh hospital data
      setComment("");
      setRating(5);
    } else {
      alert(data.message);
    }
  };

  if (!hospital) return <Loader />;

  return (
    <div className="hospital-page">
      {/* ================= GO BACK BUTTON ================= */}
      {locationMode && (
        <button
          className="go-back-fixed"
          onClick={() => setLocationMode(false)}
        >
          ← Go Back
        </button>
      )}

      {/* ================= HERO SECTION (ALWAYS FULL) ================= */}
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

          {/* ⭐ Rating ALWAYS visible */}
          <div className="hero-rating">
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            {hospital.ratings?.avg_rating}
          </div>

          {/* Description ALWAYS visible */}
          <p className="hospital-description">{hospital.description}</p>

          {/* Facilities ALWAYS visible */}
          <div className="facility-preview">
            {hospital.facilities?.map((facility, index) => (
              <span key={index} className="facility-tag">
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ALL OTHER SECTIONS (HIDDEN IN LOCATION MODE) ================= */}
      {!locationMode && (
        <div className="container">
          {/* STATS */}
          <h3 className="section-title">Hospital Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <Users size={22} />
              <h4>{hospital.hospital_stats?.total_doctors}</h4>
              <p>Doctors</p>
            </div>

            <div className="stat-card">
              <BedDouble size={22} />
              <h4>{hospital.hospital_stats?.bed_capacity}</h4>
              <p>Bed Capacity</p>
            </div>

            <div className="stat-card">
              <Activity size={22} />
              <h4>{hospital.hospital_stats?.icu_beds}</h4>
              <p>ICU Beds</p>
            </div>

            <div className="stat-card">
              <Building2 size={22} />
              <h4>{hospital.hospital_stats?.operation_theatres}</h4>
              <p>Operation Theatres</p>
            </div>
          </div>

          {/* SERVICES */}
          <h3 className="section-title">Services Available</h3>
          <div className="services-grid">
            {hospital.services?.emergency_24x7 && (
              <div className="service-card">
                <Activity size={20} />
                24x7 Emergency
              </div>
            )}

            {hospital.services?.ambulance_service && (
              <div className="service-card">
                <Ambulance size={20} />
                Ambulance Service
              </div>
            )}

            {hospital.services?.online_appointment && (
              <div className="service-card">
                <Clock size={20} />
                Online Appointment
              </div>
            )}

            {hospital.services?.blood_bank_available && (
              <div className="service-card">
                <ShieldCheck size={20} />
                Blood Bank Available
              </div>
            )}
          </div>

          {/* INSURANCE */}
          <h3 className="section-title">Insurance Accepted</h3>
          <div className="insurance-list">
            {hospital.services?.insurance_accepted?.map((ins, index) => (
              <span key={index} className="insurance-tag">
                {ins}
              </span>
            ))}
          </div>

          {/* DOCTORS */}
          <div className="doctor-header">
            <h3 className="section-title">Top Doctors</h3>
            <Link to={`/doctors?hospital=${id}`}>
              <button className="all-doctors-btn">View All Doctors</button>
            </Link>
          </div>

          <div className="doctor-row">
            {doctors.slice(0, 4).map((doctor) => (
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

                  <div className="doctor-rating-box">
                    <Star size={14} fill="#ff9800" stroke="#ff9800" />
                    {doctor.avg_rating}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ================= REVIEWS ================= */}
          <div className="review-header">
            <h3 className="section-title">Patient Reviews</h3>
            <button
              className={`add-review-btn ${showReviewForm ? "cancel-mode" : ""}`}
              onClick={() => {
                const userInfo = JSON.parse(localStorage.getItem("userInfo"));

                if (!userInfo) {
                  alert("Please login to add your review");
                  navigate("/login");
                  return;
                }

                setShowReviewForm(!showReviewForm);
              }}
            >
              {showReviewForm ? "Cancel" : "+ Add Review"}
            </button>
          </div>
          {/* ================= REVIEW FORM ================= */}
          {showReviewForm && (
            <form
              className="review-form"
              onSubmit={(e) => {
                handleReviewSubmit(e);
                setShowReviewForm(false);
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />

              <div className="rating">
                {[5, 4, 3, 2, 1].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`star-${star}`}
                      name="star-radio"
                      value={star}
                      checked={rating === star}
                      onChange={() => setRating(star)}
                    />
                    <label htmlFor={`star-${star}`}>
                      <svg viewBox="0 0 24 24">
                        <path
                          pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                        />
                      </svg>
                    </label>
                  </React.Fragment>
                ))}
              </div>

              <textarea
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <button type="submit" className="primary-btn">
                Submit Review
              </button>
            </form>
          )}

          {/* ================= REVIEW LIST ================= */}
          <div className="reviews-grid">
            {hospital.reviews?.map((review, index) => (
              <div key={index} className="review-card">
                <h4>{review.patient_name}</h4>

                <div className="review-stars">
                  {[...Array(review?.rating || 0)].map((_, i) => (
                    <Star key={i} size={14} fill="#ffc107" stroke="#ffc107" />
                  ))}
                </div>

                <p>"{review.comment}"</p>
              </div>
            ))}
          </div>

          {/* CONTACT */}
          <div className="contact-card">
            <div className="contact-row">
              <MapPin size={18} />
              {hospital.location?.address}
            </div>

            <div className="contact-row">
              <Phone size={18} />
              {hospital.contact?.phone}
            </div>

            <div className="contact-row">
              <Clock size={18} />
              {hospital.timing?.opening_time} - {hospital.timing?.closing_time}
            </div>

            <button className="primary-btn">Book Appointment</button>

            <button
              className="location-btn"
              onClick={() => {
                setLocationMode(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Navigation size={18} />
              Get Location
            </button>
          </div>
        </div>
      )}

      {/* ================= MAP (ALWAYS VISIBLE) ================= */}
      <Map
        latitude={hospital.location.latitude}
        longitude={hospital.location.longitude}
        hospitalName={hospital.hospital_name}
      />
    </div>
  );
};
export default ShowHospital;
