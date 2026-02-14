import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    hospital_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    hospital_name: {
      type: String,
      required: true,
      trim: true,
    },

    hospital_type: {
      type: String,
      enum: ["Private", "Government", "Trust", "Government/Grant"],
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      pincode: { type: String, required: true },
    },

    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },

    facilities: [{ type: String }],

    specializations: [{ type: String }],

    hospital_stats: {
      total_doctors: { type: Number, default: 0 },
      bed_capacity: { type: Number, default: 0 },
      icu_beds: { type: Number, default: 0 },
      operation_theatres: { type: Number, default: 0 },
    },

    services: {
      emergency_24x7: { type: Boolean, default: false },
      ambulance_service: { type: Boolean, default: false },
      online_appointment: { type: Boolean, default: false },
      blood_bank_available: { type: Boolean, default: false },
      insurance_accepted: [{ type: String }],
    },

    timing: {
      opening_time: { type: String },
      closing_time: { type: String },
    },

    ratings: {
      avg_rating: { type: Number, default: 0 },
      total_reviews: { type: Number, default: 0 },
    },

    graph: {
      success_rate: { type: Number },
      hospital_rating: { type: Number },
      doctors_rating: { type: Number },
      average_rating: { type: Number },
    },

    reviews: [
      {
        patient_name: String,
        rating: Number,
        comment: String,
      },
    ],

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Hospital", hospitalSchema);
