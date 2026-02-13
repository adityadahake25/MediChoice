import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    doctor_id: {
      type: String,
      required: true,
      unique: true,
    },

    doctor_name: {
      type: String,
      required: true,
    },

    image: {
      type: String, // image path / URL
      // required: true,
      default: "/uploads/doctors/d1.jpeg",
      set: (v) => (v === "" ? "/uploads/doctors/d1.jpeg" : v),
    },

    specialization: {
      type: String,
      required: true,
    },

    experience_years: {
      type: Number,
      required: true,
    },

    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },

    consultation_fee: {
      type: Number,
      required: true,
    },

    contact_number: {
      type: String,
      required: true,
    },

    availability: {
      type: String,
    },

    consultation_mode: {
      type: String,
      enum: ["online", "offline", "both"],
      default: "offline",
    },

    avg_rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Doctor", doctorSchema);
