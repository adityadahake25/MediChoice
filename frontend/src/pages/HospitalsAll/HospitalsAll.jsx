import { useEffect, useState } from "react";
import "./HospitalsAll.css";
import { Link } from "react-router-dom";

const HospitalsAll = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hospitals");
        const data = await response.json();
        setHospitals(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) return <div className="loading">Loading hospitals...</div>;

  return (
    <div className="hospitals-container">
      <h1 className="page-title">All Hospitals</h1>

      <div className="hospital-grid">
        {hospitals.map((hospital) => (
          <div className="hospital-card" key={hospital._id}>
            {/* Image */}
            <div className="hospital-image">
              <img
                src={`http://localhost:5000${hospital.image}`}
                alt={hospital.hospital_name}
              />
              <span className="rating-badge">⭐ {hospital.avg_rating}</span>
            </div>

            {/* Content */}
            <div className="hospital-content">
              <h3>{hospital.hospital_name}</h3>
              <p className="location">
                {hospital.city}, {hospital.state}
              </p>

              <p className="type">{hospital.hospital_type}</p>

              <div className="facilities">
                {hospital.facilities.slice(0, 3).map((facility, index) => (
                  <span key={index} className="facility-tag">
                    {facility}
                  </span>
                ))}
              </div>

              <p className="doctors">👨‍⚕️ {hospital.total_doctors} Doctors</p>

              <Link to={`/hospitals/${hospital._id}`}>
                <button className="view-btn">View Hospital</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsAll;
