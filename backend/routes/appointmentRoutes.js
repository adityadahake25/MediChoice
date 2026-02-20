import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// ================= BOOK APPOINTMENT =================
router.post("/book", async (req, res) => {
  try {
    const { patientName, doctorId, problem, date, time } = req.body;

    const newAppointment = new Appointment({
      patientName,
      doctorId,
      problem,
      date,
      time,
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

// ================= GET DOCTOR APPOINTMENTS =================
router.get("/doctor/:doctorId", async (req, res) => {
  try {
    const appointments = await Appointment.find({
      doctorId: req.params.doctorId,
    }).sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================= UPDATE STATUS =================
router.put("/:id", async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
