import express from "express";
import Hospital from "../models/Hospitals.js";

const router = express.Router();

// 🔥 TOP hospitals FIRST (IMPORTANT)
router.get("/top", async (req, res) => {
  try {
    const hospitals = await Hospital.find()
      .sort({ "ratings.avg_rating": -1 })
      .limit(4);

    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all hospitals
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
