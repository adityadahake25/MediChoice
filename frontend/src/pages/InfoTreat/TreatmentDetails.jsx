import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import treatments from "./InfoTreat";
import doctors from "./doctors";
import moreDoctors from "./moredoctors";
import "./TreatmentDetails.css";

const TreatmentDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find treatment using slug
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return (
      <div className="not-found">
        <h2>Treatment Not Found</h2>
        <button onClick={() => navigate("/treatments-list")}>
          Back to Treatments
        </button>
      </div>
    );
  }

  // Merge both doctor arrays
  const allDoctors = [...doctors, ...moreDoctors];

  // Filter doctors according to treatment name
  const relatedDoctors = allDoctors.filter(
    (doc) => doc.treatment === treatment.name,
  );

  return (
    <div className="details-wrapper">
      {/* HERO SECTION */}
      <div className="details-hero">
        <h1>{treatment.name}</h1>
        <p>{treatment.description}</p>
      </div>

      <div className="details-container">
        {/* LEFT SECTION */}
        <div className="details-main">
          <div className="card">
            <h2>Why is this treatment needed?</h2>
            <p>{treatment.whyNeeded}</p>
          </div>

          <div className="card">
            <h2>How is the procedure done?</h2>
            <p>{treatment.procedureOverview}</p>
          </div>

          <div className="card">
            <h2>Preparation</h2>
            <p>{treatment.preparation}</p>
          </div>

          <div className="card">
            <h2>After Care & Recovery</h2>
            <p>{treatment.afterCare}</p>
          </div>

          <div className="card">
            <h2>Possible Risks</h2>
            <ul>
              {treatment.risks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </div>

          {/* DOCTORS SECTION */}
          <div className="card">
            <h2>Recommended Specialists</h2>

            {relatedDoctors.length === 0 ? (
              <p>No doctors available for this treatment currently.</p>
            ) : (
              <div className="doctor-grid">
                {relatedDoctors.map((doctor) => (
                  <div key={doctor.doctor_id} className="doctor-card">
                    <h3>
                      {doctor.doctor_name}
                      {doctor.verified && (
                        <span className="verified-badge"> ✔ Verified</span>
                      )}
                    </h3>

                    <p className="spec">{doctor.specialization}</p>

                    <div className="doctor-meta">
                      <span>⭐ {doctor.avg_rating}</span>
                      <span>{doctor.experience_years}+ yrs exp</span>
                    </div>

                    <p className="hospital">
                      {doctor.hospital.hospital_name}, {doctor.hospital.city}
                    </p>

                    <p className="patients">
                      {doctor.patients_treated}+ Patients Treated
                    </p>

                    <p className="fee">
                      Consultation Fee: ₹{doctor.consultation_fee}
                    </p>

                    <button
                      className="book-btn"
                      onClick={() => navigate(`/book/${doctor.doctor_id}`)}
                    >
                      Book Consultation
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="details-sidebar">
          <div className="summary-card">
            <h3>Treatment Summary</h3>

            <div className="summary-item">
              <span>Hospital Stay</span>
              <strong>{treatment.hospitalStay}</strong>
            </div>

            <div className="summary-item">
              <span>Recovery Time</span>
              <strong>{treatment.recoveryTime}</strong>
            </div>

            <div className="summary-item">
              <span>Average Cost</span>
              <strong>{treatment.averageCostIndia}</strong>
            </div>

            <div className="summary-item">
              <span>Success Rate</span>
              <strong>{treatment.successRate}</strong>
            </div>

            {/* ✅ UPDATED BUTTON */}
            <button
              className="primary-btn"
              onClick={() => navigate("/estimate")}
            >
              Get Cost Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;
