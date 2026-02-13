import "./Testimonials.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya N.",
    role: "General Physician Consultation",
    rating: 5,
    text: "The consultation was very smooth and well organized. The doctor explained everything clearly and patiently.",
    image:
      "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Amit P.",
    role: "Online Medical Consultation",
    rating: 4,
    text: "Booking the appointment was easy and hassle-free. Overall, it was a good and reliable experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sneha K.",
    role: "Primary Health Checkup",
    rating: 5,
    text: "The platform is simple and easy to use. I received quick and helpful medical advice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s",
  },
  {
    name: "Rahul M.",
    role: "Cardiology Consultation",
    rating: 4,
    text: "The doctor was polite and professional. I felt comfortable discussing my health issues.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQa8Rxqr_hb8AMHN4DEEg_cGg4yUNdaX6lyg&s",
  },
  {
    name: "Priya S.",
    role: "Diagnostic Test & Report Review",
    rating: 5,
    text: "Very good healthcare service and support. I would definitely recommend it to others.",
    image:
      "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
  },
  {
    name: "Neha T.",
    role: "Follow-up Consultation",
    rating: 5,
    text: "The appointment process was quick and simple. The overall service felt safe and trustworthy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAa5feWGju95NLmf97imfDRjqJ1OhbK7DZEg&s",
  },
  {
    name: "Kunal S.",
    role: "Dermatology Consultation",
    rating: 4,
    text: "The consultation was timely and well managed. The doctor provided clear guidance and precautions.",
    image:
      "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
  },
  {
    name: "Anjali R.",
    role: "Telemedicine Consultation",
    rating: 5,
    text: "The platform made healthcare access very convenient. I received proper treatment advice without any confusion.",
    image:
      "https://thumbs.dreamstime.com/b/beautiful-smiling-young-woman-profile-looking-down-long-ama-amazing-hair-nature-bright-sunset-summer-background-closeup-119826079.jpg",
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

            <div className="profileBox">
              <img src={item.image} alt={item.name} className="avatar" />
              <span className="name">{item.name}</span>
            </div>
            <p className="role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
