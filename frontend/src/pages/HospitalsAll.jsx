import { useEffect, useState } from "react";

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

  if (loading) return <h2>Loading hospitals...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hospitals</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{hospital.hospital_name}</h3>
            <p>
              <strong>Type:</strong> {hospital.hospital_type}
            </p>
            <p>
              <strong>Location:</strong> {hospital.city}, {hospital.state}
            </p>
            <p>
              <strong>Contact:</strong> {hospital.contact_number}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {hospital.avg_rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsAll;
