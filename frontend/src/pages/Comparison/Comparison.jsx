import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Comparison.css";
import ComparisonChart from "./ComparisonChart";

export default function Comparison() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const idsParam = queryParams.get("ids");
  const selectedIds = idsParam ? idsParam.split(",") : [];

  const [hospitals, setHospitals] = useState([]);
  const [activeId, setActiveId] = useState(null);

  // Calculate overall score for each hospital
  const hospitalsWithScore = hospitals.map((hospital) => {
    const success = hospital.graph?.success_rate || 0;
    const hospitalRating = hospital.graph?.hospital_rating || 0;
    const doctorRating = hospital.graph?.doctors_rating || 0;

    const overall = Math.round((success + hospitalRating + doctorRating) / 3);

    return { ...hospital, overallScore: overall };
  });

  const highestScore =
    hospitalsWithScore.length > 0
      ? Math.max(...hospitalsWithScore.map((h) => h.overallScore))
      : 0;

  useEffect(() => {
    if (selectedIds.length > 0) {
      fetchHospitals();
    }
  }, [location.search]);

  const fetchHospitals = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/comparison?ids=${selectedIds.join(",")}`,
      );
      setHospitals(res.data);
    } catch (error) {
      console.error("Error fetching comparison data:", error);
    }
  };

  return (
    <div className="comparison-page">
      <h1>Compare Hospitals</h1>
      <p className="subtitle">
        Side-by-side comparison to help you choose the best option
      </p>

      <div className="comparison-grid">
        {hospitalsWithScore.map((item) => (
          <div
            key={item._id}
            onClick={() => setActiveId(item._id)}
            className={`compare-card 
              ${activeId === item._id ? "active-card" : ""}
              ${item.overallScore === highestScore ? "best-card" : ""}
            `}
          >
            {item.overallScore === highestScore && (
              <div className="best-badge">🏆 Best Choice</div>
            )}

            {/* Hospital Name */}
            <h3>{item.hospital_name}</h3>

            {/* Location */}
            <p className="city">
              {item.location?.city}, {item.location?.state}
            </p>

            {/* Hospital Type */}
            <div className="type-box">
              <span className="label">Hospital Type</span>
              <strong>{item.hospital_type}</strong>
            </div>

            {/* Doctor Rating + Success Rate */}
            <div className="stats">
              <div className="stat-card doctor-rating">
                <span className="label">Doctor Rating</span>
                <strong>{item.graph?.doctors_rating}%</strong>
              </div>

              <div className="stat-card success">
                <span className="label">Success Rate</span>
                <strong>{item.graph?.success_rate}%</strong>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="infra-section">
              <div className="infra-box">
                <span className="label">Doctors</span>
                <strong>{item.hospital_stats?.total_doctors}</strong>
              </div>

              <div className="infra-box">
                <span className="label">Beds</span>
                <strong>{item.hospital_stats?.bed_capacity}</strong>
              </div>

              <div className="infra-box">
                <span className="label">ICU</span>
                <strong>{item.hospital_stats?.icu_beds}</strong>
              </div>
            </div>

            {/* Rating */}
            <div className="rating-pill">
              ⭐ {item.ratings?.avg_rating} ({item.ratings?.total_reviews})
            </div>

            {/* 🔥 GRAPH INSIDE CARD */}
            <div className="card-graph">
              <ComparisonChart
                success={`${item.graph?.success_rate || 0}%`}
                hospitalRating={item.graph?.hospital_rating || 0}
                doctorRating={item.graph?.doctors_rating || 0}
              />
            </div>

            {/* Button */}
            <button className="book-btn">Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}
