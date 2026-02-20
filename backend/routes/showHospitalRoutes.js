import express from "express";
import Hospitals from "../models/Hospitals.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET single hospital
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const hospital = await Hospitals.findById(id);

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD REVIEW
router.post("/:id/review", protect, async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const hospital = await Hospitals.findById(id);

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const newReview = {
      patient_name: req.user.name, // auto from logged-in user
      rating,
      comment,
    };

    hospital.reviews.push(newReview);

    const totalReviews = hospital.reviews.length;

    const avgRating =
      hospital.reviews.reduce((acc, item) => acc + item.rating, 0) /
      totalReviews;

    hospital.ratings.avg_rating = Number(avgRating.toFixed(1));
    hospital.ratings.total_reviews = totalReviews;

    await hospital.save();

    res.status(201).json({
      message: "Review added successfully",
      hospital,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
