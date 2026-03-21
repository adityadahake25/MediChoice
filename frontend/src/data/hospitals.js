import aiims from "../assets/aiims.jpeg";
import apollo from "../assets/apollo.jpeg";
import silverline from "../assets/silverline.jpeg";
import rubyhall from "../assets/rubyhall.jpeg";
import defaultHospital from "../assets/default-hospital.jpeg";

export const hospitals = [
  {
    hospital_id: 1,
    hospital_name: "AIIMS Delhi",
    city: "New Delhi",
    state: "Delhi",
    avg_rating: 4.8,
    total_doctors: 120,
    hospital_type: "Government",
    facilities: ["ICU", "Emergency", "Cardiology"],
    image: aiims,
    id: "699590bd477beeedd1d6b179",
  },
  {
    hospital_id: 2,
    hospital_name: "Apollo Hospital",
    city: "Mumbai",
    state: "Maharashtra",
    avg_rating: 4.6,
    total_doctors: 95,
    hospital_type: "Private",
    facilities: ["ICU", "Neurology", "Orthopedic"],
    image: apollo,
    id: "699590bd477beeedd1d6b170",
  },
  {
    hospital_id: 3,
    hospital_name: "Jehangir Hospital",
    city: "Pune",
    state: "Maharashtra",
    avg_rating: 4.5,
    total_doctors: 120,
    hospital_type: "Private",
    facilities: ["Emergency", "ENT", "Pediatrics"],
    image: silverline,
    id: "699590bd477beeedd1d6b19a",
  },
  {
    hospital_id: 4,
    hospital_name: "Ruby Hall Clinic",
    city: "Pune",
    state: "Maharashtra",
    avg_rating: 4.7,
    total_doctors: 110,
    hospital_type: "Private",
    facilities: ["ICU", "Cardiology", "Oncology"],
    image: rubyhall,
    id: "699590bd477beeedd1d6b19d",
  },
];
