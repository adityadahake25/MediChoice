import mongoose from "mongoose";
import doctors from "./doctorData.js";
import Doctor from "../models/Doctors.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const initDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");

    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);

    console.log("Doctor data initialized successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

initDoctors();
