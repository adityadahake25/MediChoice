import express from "express";
import Hospital from "../models/Hospitals.js";

const router = express.Router();

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
