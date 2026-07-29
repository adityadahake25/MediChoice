import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";

import {
  FaUserInjured,
  FaRupeeSign,
  FaCalendarCheck,
  FaHeartbeat,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import "./Dashboard.css";

const data = [
  { day: "Mon", patients: 30 },
  { day: "Tue", patients: 45 },
  { day: "Wed", patients: 28 },
  { day: "Thu", patients: 50 },
  { day: "Fri", patients: 38 },
];

const Dashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("All");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // 🔍 Debug
  console.log("User Info:", userInfo);

  // 🚫 If no user logged in
  if (!userInfo) {
    return <h2>Please Login First</h2>;
  }

  // 🚫 If not doctor
  if (userInfo.role !== "doctor") {
    return <h2>Access Denied - Not a Doctor</h2>;
  }

  const userId = userInfo._id;
  const token = userInfo.token;

  /* ================= FETCH DOCTOR PROFILE ================= */

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const res = await axios.get(
          `https://medichoice-backend.onrender.com/api/doctors/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Doctor Profile:", res.data);
        setDoctor(res.data);
      } catch (error) {
        console.log("Doctor fetch error:", error);
      }
    };

    if (userId && token) fetchDoctorProfile();
  }, [userId, token]);

  /* ================= FETCH APPOINTMENTS ================= */

  useEffect(() => {
    if (!doctor?._id) return;

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          `https://medichoice-backend.onrender.com/api/appointments/doctor/${doctor._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Appointments:", res.data);
        setRequests(res.data);
      } catch (error) {
        console.log("Appointment fetch error:", error);
      }
    };

    fetchAppointments();
  }, [doctor, token]);

  /* ================= UPDATE STATUS ================= */

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://medichoice-backend.onrender.com/api/appointments/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status } : req)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= FILTER LOGIC ================= */

  const pendingAppointments = requests.filter(
    (req) => req.status === "Pending",
  );

  const today = new Date().toISOString().split("T")[0];

  const todaysAppointments = requests.filter(
    (req) => req.status === "Accepted" && req.date === today,
  );

  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <div className="dashboard-layout">
      <DoctorSidebar />

      <div className="dashboard-main">
        <h1 className="welcome-text">
          Welcome, Dr. {doctor?.doctor_name || "Doctor"} 👩‍⚕️
        </h1>

        <div className="kpi-container">
          <div className="kpi-card">
            <FaCalendarCheck className="kpi-icon purple" />
            <p>Appointments</p>
            <h2>{requests.length}</h2>
          </div>
        </div>

        <div className="card request-small">
          <h3>Appointment Requests ({pendingAppointments.length})</h3>

          {requests.length === 0 && <p>No appointments found</p>}

          {filteredRequests.map((req) => (
            <div key={req._id} className="request-item">
              <div>
                <strong>{req.patientName}</strong>
                <p>{req.problem}</p>
                <small>
                  {req.date} | {req.time}
                </small>
              </div>

              <div>
                {req.status === "Pending" ? (
                  <>
                    <button
                      className="accept"
                      onClick={() => updateStatus(req._id, "Accepted")}
                    >
                      <FaCheck />
                    </button>

                    <button
                      className="reject"
                      onClick={() => updateStatus(req._id, "Rejected")}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className={`status ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
