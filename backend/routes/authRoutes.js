import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 🔐 Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/* ================= SIGNUP ================= */

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, mobile, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      mobile,
      role,
    });

    if (role === "doctor") {
      // ⚠️ Replace this with a real hospital ObjectId from your DB
      const hospitalId = "PUT_REAL_HOSPITAL_OBJECT_ID_HERE";

      await Doctor.create({
        doctor_id: `DOC-${Date.now()}`,
        doctor_name: name,
        specialization: "General Physician",
        experience_years: 0,
        hospital: hospitalId,
        consultation_fee: 0,
        contact_number: mobile,
        userId: user._id,
      });
    }

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= LOGIN ================= */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
