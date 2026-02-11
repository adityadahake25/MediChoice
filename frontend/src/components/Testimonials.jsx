import "./Testimonials.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya N.",
    role: "General Physician Consultation",
    rating: 5,
    text: "The consultation was very smooth and well organized. The doctor explained everything clearly and patiently.",
  },
  {
    name: "Amit P.",
    role: "Online Medical Consultation",
    rating: 4,
    text: "Booking the appointment was easy and hassle-free. Overall, it was a good and reliable experience.",
  },
  {
    name: "Sneha K.",
    role: "Primary Health Checkup",
    rating: 5,
    text: "The platform is simple and easy to use. I received quick and helpful medical advice.",
  },
  {
    name: "Rahul M.",
    role: "Cardiology Consultation",
    rating: 4,
    text: "The doctor was polite and professional. I felt comfortable discussing my health issues.",
  },
  {
    name: "Priya S.",
    role: "Diagnostic Test & Report Review",
    rating: 5,
    text: "Very good healthcare service and support. I would definitely recommend it to others.",
  },
  {
    name: "Neha T.",
    role: "Follow-up Consultation",
    rating: 5,
    text: "The appointment process was quick and simple. The overall service felt safe and trustworthy.",
  },
  {
    name: "Kunal S.",
    role: "Dermatology Consultation",
    rating: 4,
    text: "The consultation was timely and well managed. The doctor provided clear guidance and precautions.",
  },
  {
    name: "Anjali R.",
    role: "Telemedicine Consultation",
    rating: 5,
    text: "The platform made healthcare access very convenient. I received proper treatment advice without any confusion.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials-section">
      {/* 🔵 Blue heading */}
      <span className="testimonial-tag">TESTIMONIALS</span>

      {/* Bold main title */}
      <h2 className="title">What Patients Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>

            <p className="text">“{item.text}”</p>

            <p className="name">{item.name}</p>
            <p className="role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
