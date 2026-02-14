import express from "express";
import Doctor from "../models/Doctors.js";

const router = express.Router();

// ✅ Get doctors by hospital (PUT THIS FIRST)
router.get("/hospital/:hospitalId", async (req, res) => {
  try {
    const doctors = await Doctor.find({
      hospital: req.params.hospitalId,
    }).populate("hospital");

    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("hospital");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get single doctor
router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("hospital");
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
