import express from "express";
import cors from "cors";
import Hospitals from "./models/Hospitals.js";
import router from "./routes/hospitalRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/api/hospitals", router);

export default app;
