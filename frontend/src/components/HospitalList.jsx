import HospitalCard from "./HospitalCard";
import { hospitals } from "../data/hospitals";
import "./HospitalList.css";

const HospitalList = () => {
  // Sort hospitals by rating (highest first)
  const sortedHospitals = [...hospitals].sort(
    (a, b) => b.avg_rating - a.avg_rating,
  );

  return (
    <section className="hospital-section">
      <div className="section-header">
        <h2>Highest Rated Hospitals</h2>
        <p>Trusted by thousands of patients for world-class medical care</p>
      </div>

      <div className="hospital-grid">
        {sortedHospitals.map((hospital) => (
          <HospitalCard key={hospital.hospital_id} hospital={hospital} />
        ))}
      </div>
    </section>
  );
};

export default HospitalList;
