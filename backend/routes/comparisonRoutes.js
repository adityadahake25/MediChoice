import express from "express";
import Hospital from "../models/Hospitals.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { ids } = req.query;

    // If IDs are provided → filter by them
    if (ids) {
      const idsArray = ids.split(",");

      const hospitals = await Hospital.find({
        _id: { $in: idsArray },
      });

      return res.json(hospitals);
    }

    // If no IDs → return empty array (safer)
    return res.json([]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
