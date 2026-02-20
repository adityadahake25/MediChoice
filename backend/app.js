import express from "express";
import cors from "cors";
import Hospitals from "./models/Hospitals.js";

import router from "./routes/hospitalRoutes.js";
import ShowHospital from "./routes/showHospitalRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import comparisonRoutes from "./routes/comparisonRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.use("/api/hospitals", router);
app.use("/api/hospitals", ShowHospital);

app.use("/api/doctors", doctorRoutes);

app.use("/api/comparison", comparisonRoutes);

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("MediChoice Backend Running 🚀");
});

export default app;
