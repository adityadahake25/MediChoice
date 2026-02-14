import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "../models/Doctors.js";
import Hospital from "../models/Hospitals.js";
import doctors from "./doctorData.js";

dotenv.config({ path: "../.env" });

const initDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connected to DB");

    // Clear existing doctors
    await Doctor.deleteMany({});
    console.log("🗑 Old doctors removed");

    for (let doc of doctors) {
      // 🔎 Find hospital by hospital_id (H001, H002 etc.)
      const hospitalDoc = await Hospital.findOne({
        hospital_id: doc.hospital.hospital_id,
      });

      if (!hospitalDoc) {
        console.log(`❌ Hospital not found for doctor: ${doc.doctor_name}`);
        continue;
      }

      // 🔥 IMPORTANT: Replace hospital object with MongoDB _id
      const doctorData = {
        ...doc,
        hospital: hospitalDoc._id,
      };

      // Remove extra hospital object fields if present
      delete doctorData.hospital.hospital_id;
      delete doctorData.hospital.hospital_name;
      delete doctorData.hospital.city;
      delete doctorData.hospital.state;

      await Doctor.create(doctorData);

      // console.log(`✅ Inserted: ${doc.doctor_name}`);
    }

    console.log("🎉 Doctors initialized successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error initializing doctors:", err);
    process.exit(1);
  }
};

initDoctors();
