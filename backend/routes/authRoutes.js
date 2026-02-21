import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Doctor from "../models/Doctors.js";
import multer from "multer";
import path from "path";

const router = express.Router();

/* ================= MULTER CONFIG ================= */

// Store files in uploads folder with unique names
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ================= TOKEN ================= */

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/* ================= SIGNUP ================= */

router.post(
  "/signup",
  upload.fields([
    { name: "license", maxCount: 1 },
    { name: "degree", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // 🔥 Safe destructuring
      const { name, email, password, mobile, role } = req.body || {};

      if (!name || !email || !password || !mobile) {
        return res.status(400).json({
          message: "Please fill all required fields",
        });
      }

      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const isDoctor = role === "doctor";

      /* ================= CREATE USER ================= */

      const user = await User.create({
        name,
        email,
        password,
        mobile,
        role: isDoctor ? "doctor" : "patient",
        verificationStatus: isDoctor ? "pending" : "approved",
        isVerified: isDoctor ? false : true,
      });

      /* ================= DOCTOR PROFILE ================= */

      if (isDoctor) {
        // Validate uploaded files
        if (
          !req.files ||
          !req.files.license ||
          !req.files.degree ||
          !req.files.idProof
        ) {
          return res.status(400).json({
            message: "All documents are required for doctors.",
          });
        }

        const hospitalId = "699590bd477beeedd1d6b170";

        await Doctor.create({
          doctor_id: `DOC-${Date.now()}`,
          doctor_name: name,
          specialization: req.body.specialization || "General Physician",
          experience_years: req.body.experience || 0,
          hospital: hospitalId,
          consultation_fee: 500,
          contact_number: mobile,
          userId: user._id,

          // 🔥 Save file paths
          licenseDocument: req.files.license[0].path,
          degreeDocument: req.files.degree[0].path,
          idProofDocument: req.files.idProof[0].path,
        });

        return res.status(201).json({
          message:
            "Registration successful. Your account is under admin verification.",
        });
      }

      /* ================= PATIENT LOGIN ================= */

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({
        message: "Server error. Please try again.",
      });
    }
  },
);

/* ================= LOGIN ================= */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password",
      });
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      // 🔥 Block unverified doctors
      if (user.role === "doctor" && !user.isVerified) {
        return res.status(403).json({
          message: "Your account is pending admin approval.",
        });
      }

      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    }

    res.status(401).json({
      message: "Invalid email or password",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
});

export default router;
