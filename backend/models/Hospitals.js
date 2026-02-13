import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    hospital_id: {
      type: String,
      required: true,
      unique: true,
    },

    hospital_name: {
      type: String,
      required: true,
    },

    hospital_type: {
      type: String,
      enum: ["Private", "Government", "Trust"],
      required: true,
    },

    image: {
      type: String, // image path / URL
      // required: true,
      default: "/uploads/hospitals/h1.jpeg",
      set: (v) => (v === "" ? "/uploads/hospitals/h1.jpeg" : v),
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "India",
    },

    address: {
      type: String,
      required: true,
    },

    contact_number: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    facilities: {
      type: [String],
      default: [],
    },

    total_doctors: {
      type: Number,
      default: 0,
    },

    avg_rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    doctors_id: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true },
);

export default mongoose.model("Hospital", hospitalSchema);
