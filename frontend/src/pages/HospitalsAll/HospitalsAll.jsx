import { useEffect, useState } from "react";
import "./HospitalsAll.css";
import { Link } from "react-router-dom";
import { Search, Star, Plus, Check, User, MapPin } from "lucide-react";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const popularTreatments = [
  "Knee Replacement",
  "Heart Bypass Surgery",
  "Cataract Surgery",
  "Spinal Surgery",
];

const HospitalsAll = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedHospitals, setSelectedHospitals] = useState([]);

  const navigate = useNavigate();

  // Fetch Hospitals
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hospitals");
        const data = await response.json();

        console.log("Total hospitals from backend:", data.length); // Debug check

        setHospitals(data);
        setFilteredHospitals(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  // Filtering Logic
  useEffect(() => {
    let filtered = hospitals.filter((hospital) => {
      return (
        hospital.hospital_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (selectedCity === "" || hospital.location?.city === selectedCity) &&
        (selectedType === "" || hospital.hospital_type === selectedType) &&
        hospital.ratings?.avg_rating >= Number(minRating)
      );
    });

    setFilteredHospitals(filtered);
  }, [searchTerm, selectedCity, selectedType, minRating, hospitals]);

  const toggleHospitalSelection = (hospitalId) => {
    setSelectedHospitals((prev) => {
      // If already selected → remove it
      if (prev.includes(hospitalId)) {
        return prev.filter((id) => id !== hospitalId);
      }

      // If 3 already selected → don't allow more
      if (prev.length >= 3) {
        return prev;
      }

      // Otherwise add it
      return [...prev, hospitalId];
    });
  };

  if (loading) return <Loader />;

  const uniqueCities = [...new Set(hospitals.map((h) => h.location?.city))];

  return (
    <div className="main-container">
      {/* FILTER SIDEBAR */}
      <div className="filter-section">
        <h3>Filters</h3>

        {/* City Filter */}
        <div className="filter-group">
          <label>City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div className="filter-group">
          <label>Hospital Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Trust">Trust</option>
            <option value="Government/Grant">Government/Grant</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <label>Minimum Rating</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
          <span>{minRating} ⭐</span>
        </div>

        {/* Popular Treatments */}
        <div className="popular-section">
          <h4>Popular Treatments</h4>
          <div className="popular-list">
            {popularTreatments.map((treatment, index) => (
              <span
                key={index}
                className={`popular-chip ${
                  selectedTreatment === treatment ? "active" : ""
                }`}
                onClick={() => setSelectedTreatment(treatment)}
              >
                {treatment}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="results-section">
        <div className="title-row">
          <h1 className="page-title">All Hospitals</h1>

          {selectedHospitals.length >= 2 && (
            <button
              className="compare-main-btn"
              onClick={() =>
                navigate(`/compare?ids=${selectedHospitals.join(",")}`)
              }
            >
              Compare ({selectedHospitals.length})
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <p className="results-count">
          {filteredHospitals.length} hospitals found
        </p>

        {/* Hospital Grid */}
        <div className="hospital-grid">
          {filteredHospitals.map((hospital) => {
            console.log("Image path:", hospital.image);

            return (
              <div className="hospital-card" key={hospital._id}>
                <div className="hospital-image">
                  <button
                    className={`compare-btn ${
                      selectedHospitals.includes(hospital._id) ? "active" : ""
                    }`}
                    onClick={() => toggleHospitalSelection(hospital._id)}
                  >
                    {selectedHospitals.includes(hospital._id) ? (
                      <Check size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </button>

                  <img
                    src={`http://localhost:5000${hospital.image}`}
                    alt={hospital.hospital_name}
                  />

                  <div className="rating-badge">
                    <Star size={14} fill="#ffc107" stroke="#ffc107" />
                    {hospital.ratings?.avg_rating}
                  </div>
                </div>

                <div className="hospital-content">
                  <h3>{hospital.hospital_name}</h3>

                  <div className="location">
                    <MapPin size={14} />
                    {hospital.location?.city}, {hospital.location?.state}
                  </div>

                  <p className="type">{hospital.hospital_type}</p>

                  <div className="facilities">
                    {hospital.facilities?.slice(0, 3).map((facility, index) => (
                      <span key={index} className="facility-tag">
                        {facility}
                      </span>
                    ))}
                  </div>

                  <p className="doctors">
                    👨‍⚕️ {hospital.hospital_stats?.total_doctors} Doctors
                  </p>

                  <Link
                    to={`/hospitals/${hospital._id}`}
                    className="view-btn-link"
                  >
                    <button className="view-btn">View Hospital</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HospitalsAll;
