import React, { useState } from "react";
import { Shield, Star, MapPin, Activity } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

import hospitals from "../../../../backend/init/hospitalData";
import "./Estimator.css";

const Estimator = () => {
  const brandName = "MediChoice";

  // ------------------ CITY MULTIPLIERS ------------------
  const cities = {
    Ahmedabad: 0.9,
    Bangalore: 1.1,
    Chandigarh: 0.95,
    Chennai: 1.0,
    Delhi: 1.15,
    Gurgaon: 1.2,
    Hyderabad: 1.0,
    Jaipur: 0.85,
    Lucknow: 0.85,
    Mumbai: 1.25,
    Noida: 1.05,
    Pune: 1.0,
    Vellore: 0.8,
  };

  // ------------------ TREATMENTS ------------------
  const treatments = [
    { name: "Angioplasty", base: 180000 },
    { name: "Heart Bypass Surgery (CABG)", base: 420000 },
    { name: "Brain Tumor Surgery", base: 550000 },
    { name: "Spinal Fusion Surgery", base: 380000 },
    { name: "Knee Replacement", base: 320000 },
    { name: "Hip Replacement", base: 350000 },
    { name: "Liver Transplant", base: 2400000 },
    { name: "Kidney Transplant", base: 700000 },
    { name: "Cataract Surgery", base: 85000 },
    { name: "LASIK Eye Surgery", base: 75000 },
    { name: "Chemotherapy (Per Cycle)", base: 65000 },
    { name: "Appendix Surgery", base: 95000 },
  ];

  // ------------------ STATE ------------------
  const [selectedTreatment, setSelectedTreatment] = useState(
    treatments[0].name,
  );
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [insuranceType, setInsuranceType] = useState(0.7);

  // ------------------ COST CALCULATION ------------------
  const treatment = treatments.find((t) => t.name === selectedTreatment);

  const cityMultiplier = cities[selectedCity];
  const totalCost = Math.round(treatment.base * cityMultiplier);
  const insurancePays = Math.round(totalCost * insuranceType);
  const yourPay = totalCost - insurancePays;

  // ------------------ HOSPITAL FILTER ------------------
  const cityHospitals = hospitals.filter(
    (hospital) => hospital.location.city === selectedCity,
  );

  const topHospitals = cityHospitals
    .sort((a, b) => b.graph.average_rating - a.graph.average_rating)
    .slice(0, 3);

  const bestHospital = topHospitals[0];

  // ------------------ GRAPH DATA (VARIES BY BEST HOSPITAL) ------------------
  const chartData = [
    {
      name: "Hospital Rating",
      value: bestHospital?.graph.hospital_rating || 0,
    },
    {
      name: "Doctors Rating",
      value: bestHospital?.graph.doctors_rating || 0,
    },
    {
      name: "Success Rate",
      value: bestHospital?.graph.success_rate || 0,
    },
  ];

  return (
    <div className="estimator-wrapper">
      <div className="estimator-container">
        {/* ---------------- HEADER ---------------- */}
        <div className="header-section">
          <div className="brand-badge">
            <span>{brandName} AI Tool</span>
          </div>
          <h1>Treatment Cost Estimator</h1>
          <p>
            Smart healthcare planning for <strong>{selectedCity}</strong>
          </p>
        </div>

        {/* ---------------- INPUT SECTION ---------------- */}
        <div className="input-card">
          <div className="input-grid">
            <div className="input-group">
              <label>
                <Activity size={14} /> Treatments / Surgeries
              </label>

              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
              >
                {treatments.map((treat) => (
                  <option key={treat.name} value={treat.name}>
                    {treat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>
                <MapPin size={14} /> City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {Object.keys(cities)
                  .sort()
                  .map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>

            <div className="input-group">
              <label>
                <Shield size={14} /> Insurance Type
              </label>
              <select
                onChange={(e) => setInsuranceType(parseFloat(e.target.value))}
              >
                <option value="0.70">Corporate Policy (70%)</option>
                <option value="0.85">Premium Policy (85%)</option>
                <option value="0.00">No Insurance (Cash)</option>
              </select>
            </div>
          </div>
        </div>

        {/* ---------------- COST CARDS ---------------- */}
        <div className="stats-grid-box">
          <div className="stat-card-box blue">
            <div className="card-info">
              <span>Total Estimate</span>
              <h2>₹{totalCost.toLocaleString("en-IN")}</h2>
            </div>
          </div>

          <div className="stat-card-box pink">
            <div className="card-info">
              <span>Insurance Pays</span>
              <h2>₹{insurancePays.toLocaleString("en-IN")}</h2>
            </div>
          </div>

          <div className="stat-card-box green">
            <div className="card-info">
              <span>Your Pay</span>
              <h2>₹{yourPay.toLocaleString("en-IN")}</h2>
            </div>
          </div>
        </div>

        {/* ---------------- DETAILS SECTION ---------------- */}
        <div className="details-grid">
          {/* -------- GRAPH -------- */}
          <div className="chart-section">
            <h3>Performance Metrics of Best Hospital</h3>

            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={340}>
                <BarChart
                  data={chartData}
                  barCategoryGap="35%"
                  margin={{ top: 45, right: 40, left: 40, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorBlue1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1d4ed8" stopOpacity={1} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
                    </linearGradient>

                    <linearGradient id="colorBlue2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity={1} />
                    </linearGradient>

                    <linearGradient id="colorBlue3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity={1} />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity={1} />
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#334155", fontSize: 13, fontWeight: 500 }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis hide domain={[0, 100]} />

                  <Tooltip
                    cursor={{ fill: "rgba(37, 99, 235, 0.08)" }}
                    contentStyle={{
                      borderRadius: "14px",
                      border: "none",
                      background: "#ffffff",
                      boxShadow: "0 15px 35px rgba(37,99,235,0.2)",
                    }}
                    formatter={(value) => `${value}%`}
                  />

                  <Bar dataKey="value" radius={[14, 14, 0, 0]} barSize={65}>
                    <Cell fill="url(#colorBlue1)" />
                    <Cell fill="url(#colorBlue2)" />
                    <Cell fill="url(#colorBlue3)" />

                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={(value) => `${value}%`}
                      style={{
                        fill: "#1e293b",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {bestHospital && (
                <div className="best-hospital-label">
                  {bestHospital.hospital_name}
                  <span className="trophy-text"> (🏆 Best Overall)</span>
                </div>
              )}
            </div>
          </div>

          {/* -------- HOSPITALS -------- */}
          <div className="hospitals-section">
            <h3>Top 3 Hospitals in {selectedCity}</h3>

            {topHospitals.map((hospital, index) => (
              <div
                key={hospital.hospital_id}
                className={`hospital-card-box ${
                  index === 0 ? "best-hospital" : ""
                }`}
              >
                <div className="h-info">
                  <h4>{hospital.hospital_name}</h4>

                  <div className="stars">
                    {hospital.ratings.avg_rating}{" "}
                    <Star size={12} fill="#fbbf24" stroke="none" /> (
                    {hospital.ratings.total_reviews} reviews)
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      marginTop: "6px",
                    }}
                  >
                    Success Rate: {hospital.graph.success_rate}%
                  </div>
                </div>

                {index === 0 && (
                  <div className="risk-badge">🏆 Best Overall</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
