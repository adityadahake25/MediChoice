import express from "express";
import Hospitals from "../models/Hospitals.js";

const router = express.Router();

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

export default router;
