import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import hospitalRoutes from "./routes/hospitalRoutes.js";
import showHospitalRoutes from "./routes/showHospitalRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import comparisonRoutes from "./routes/comparisonRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/hospitals", showHospitalRoutes);

app.use("/api/doctors", doctorRoutes);
app.use("/api/comparison", comparisonRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("MediChoice Backend Running 🚀");
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

export default app;
