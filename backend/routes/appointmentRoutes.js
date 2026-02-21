import express from "express";
import Appointment from "../models/Appointment.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================================================
   ================= BOOK APPOINTMENT ======================
   ========================================================= */

router.post("/book", protect, async (req, res) => {
  try {
    const { doctorId, problem, date, time } = req.body;

    if (!doctorId || !problem || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      patientId: req.user._id, // 🔥 from token
      patientName: req.user.name, // 🔥 from token
      doctorId,
      problem,
      date,
      time,
      status: "Pending",
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================================================
   ============== GET DOCTOR APPOINTMENTS ==================
   ========================================================= */

router.get("/doctor/:doctorId", protect, async (req, res) => {
  try {
    const appointments = await Appointment.find({
      doctorId: req.params.doctorId,
    })
      .populate("patientId", "name email mobile")
      .sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================================================
   ================= UPDATE STATUS ==========================
   ========================================================= */

router.put("/:id", protect, async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
