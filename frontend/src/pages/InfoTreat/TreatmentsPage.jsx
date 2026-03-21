import React from "react";
import { useNavigate } from "react-router-dom";
import treatments from "./InfoTreat";
import "./TreatmentsPage.css";

const TreatmentsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="treatments-wrapper">
      <div className="treatments-header">
        <h1>Our Medical Treatments</h1>
        <p>
          Explore advanced medical treatments with transparent pricing, recovery
          time, and success rates.
        </p>
      </div>

      <div className="treatments-grid">
        {treatments.map((treatment) => (
          <div className="treatment-card" key={treatment.id}>
            <div className="card-top">
              <h2>{treatment.name}</h2>
              <span className="badge">{treatment.category}</span>
            </div>

            <p className="description">
              {treatment.description.slice(0, 120)}...
            </p>

            <div className="quick-info">
              <div>
                <span>Cost</span>
                <strong>{treatment.averageCostIndia}</strong>
              </div>
              <div>
                <span>Recovery</span>
                <strong>{treatment.recoveryTime}</strong>
              </div>
              <div>
                <span>Success</span>
                <strong>{treatment.successRate}</strong>
              </div>
            </div>

            <button
              className="view-btn"
              onClick={() => navigate(`/treatment-options/${treatment.slug}`)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsPage;
