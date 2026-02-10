import { Star, MapPin, Stethoscope, ArrowRight } from "lucide-react";
import defaultHospital from "../assets/default-hospital.jpeg";
import "./HospitalCard.css";

const HospitalCard = ({ hospital }) => {
    return (
        <div className="hospital-card">
            {/* Image */}
            <div className="image-wrapper">
                <img
                    src={hospital.image}
                    alt={hospital.hospital_name}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultHospital;
                    }}
                />

                <span className="rating">
                    <Star size={14} fill="#facc15" stroke="#facc15" />
                    {hospital.avg_rating}
                </span>
            </div>

            {/* Content */}
            <div className="card-content">
                <h3>{hospital.hospital_name}</h3>

                <p className="location">
                    <MapPin size={14} />
                    {hospital.city}, {hospital.state}
                </p>

                {/* Facilities */}
                <div className="tags">
                    {hospital.facilities.slice(0, 3).map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                    {hospital.facilities.length > 3 && (
                        <span className="more">
                            +{hospital.facilities.length - 3}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="footer">
                    <span className="doctors">
                        <Stethoscope size={14} />
                        {hospital.total_doctors} Doctors
                    </span>

                    <span className={`type ${hospital.hospital_type.toLowerCase()}`}>
                        {hospital.hospital_type}
                    </span>
                </div>

                {/* Action */}
                <button className="view-btn">
                    View Hospital <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
};

export default HospitalCard;
