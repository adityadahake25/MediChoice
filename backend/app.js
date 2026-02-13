import express from "express";
import cors from "cors";
import Hospitals from "./models/Hospitals.js";
import router from "./routes/hospitalRoutes.js";
import ShowHospital from "./routes/showHospitalRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/hospitals", router);
app.use("/api/hospitals", ShowHospital);

export default app;
