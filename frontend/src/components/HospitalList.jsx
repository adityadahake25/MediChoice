import { useEffect, useState } from "react";
import HospitalCard from "./HospitalCard";
import "./HospitalList.css";

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopHospitals = async () => {
    try {
      const res = await fetch(
        "https://medichoice-backend.onrender.com/api/hospitals/top",
      );

      if (!res.ok) {
        throw new Error("Failed to fetch hospitals");
      }

      const data = await res.json();
      setHospitals(data);
    } catch (error) {
      console.error(error);
      setHospitals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopHospitals();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading top hospitals...</p>;
  }

  return (
    <section className="hospital-section">
      <div className="section-header">
        <h2>Highest Rated Hospitals</h2>
        <p>Trusted by thousands of patients for world-class medical care</p>
      </div>

      <div className="hospital-grid">
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <HospitalCard key={hospital._id} hospital={hospital} />
          ))
        ) : (
          <p>No hospitals found</p>
        )}
      </div>
    </section>
  );
};

export default HospitalList;
