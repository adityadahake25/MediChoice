import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
  patient_name: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Review", reviewSchema);
