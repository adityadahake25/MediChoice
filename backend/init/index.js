import mongoose from "mongoose";
import hospitals from "./hospitalData.js";
import Hospital from "../models/Hospitals.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const initDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");

    await Hospital.deleteMany({});
    await Hospital.insertMany(hospitals);

    console.log("Hospital data initialized successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

initDB();
