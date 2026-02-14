import mongoose from "mongoose";

/* ================= EDUCATION SUB-SCHEMA ================= */

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

/* ================= AVAILABILITY SUB-SCHEMA ================= */

const availabilitySchema = new mongoose.Schema({
  days: [
    {
      type: String,
    },
  ],
  timings: {
    type: String,
  },
});

/* ================= DOCTOR SCHEMA ================= */

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
      type: String,
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

    /* 🔥 Proper Relationship (BEST PRACTICE) */
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

    availability: availabilitySchema,

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

    total_reviews: {
      type: Number,
      default: 0,
    },

    education: [educationSchema],

    certifications: [
      {
        type: String,
      },
    ],

    services: [
      {
        type: String,
      },
    ],

    about: {
      type: String,
    },

    patients_treated: {
      type: Number,
      default: 0,
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Doctor", doctorSchema);
