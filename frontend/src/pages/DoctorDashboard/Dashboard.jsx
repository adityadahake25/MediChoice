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

import "./dashboard.css";

const data = [
  { day: "Mon", patients: 30 },
  { day: "Tue", patients: 45 },
  { day: "Wed", patients: 28 },
  { day: "Thu", patients: 50 },
  { day: "Fri", patients: 38 },
];

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const userId = user?._id;

  const [doctor, setDoctor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("All");

  if (!userId || user.role !== "doctor") {
    return <h2>Access Denied</h2>;
  }

  // 1️⃣ Fetch Doctor Profile using userId
  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/doctors/user/${userId}`,
        );
        setDoctor(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) fetchDoctorProfile();
  }, [userId]);

  // 2️⃣ Fetch Appointments using doctor._id
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/appointments/doctor/${doctor._id}`,
        );
        setRequests(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (doctor?._id) fetchAppointments();
  }, [doctor]);

  // ================= UPDATE STATUS =================
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/${id}`, {
        status,
      });

      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status } : req)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  // ================= FILTERED DATA =================
  const acceptedAppointments = requests.filter(
    (req) => req.status === "Accepted",
  );

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
        <h1 className="welcome-text">Welcome, Dr. Anjali 👩‍⚕️</h1>

        {/* ================= KPI CARDS ================= */}
        <div className="kpi-container">
          <div className="kpi-card">
            <FaUserInjured className="kpi-icon blue" />
            <p>Patients</p>
            <h2>1,420</h2>
          </div>

          <div className="kpi-card">
            <FaRupeeSign className="kpi-icon green" />
            <p>Income</p>
            <h2>₹3,95,000</h2>
          </div>

          <div className="kpi-card">
            <FaCalendarCheck className="kpi-icon purple" />
            <p>Appointments</p>
            <h2>{requests.length}</h2>
          </div>

          <div className="kpi-card">
            <FaHeartbeat className="kpi-icon red" />
            <p>Treatments</p>
            <h2>845</h2>
          </div>
        </div>

        {/* ================= CHART + REQUESTS ================= */}
        <div className="chart-request-row">
          {/* Weekly Chart */}
          <div className="card chart-small">
            <h3>Weekly Patient Flow</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="patients" fill="#14b8a6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ================= APPOINTMENT REQUESTS ================= */}
          <div className="card request-small">
            <h3>Appointment Requests ({pendingAppointments.length})</h3>

            <div className="filter-buttons">
              <button onClick={() => setFilter("All")}>All</button>
              <button onClick={() => setFilter("Pending")}>Pending</button>
              <button onClick={() => setFilter("Accepted")}>Accepted</button>
              <button onClick={() => setFilter("Rejected")}>Rejected</button>
            </div>

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

        {/* ================= TODAY'S APPOINTMENTS ================= */}
        <div className="row-container">
          <div className="card large">
            <h3>Today's Appointments ({todaysAppointments.length})</h3>

            {todaysAppointments.length === 0 && <p>No appointments today</p>}

            {todaysAppointments.map((appt) => (
              <div key={appt._id} className="appointment-item">
                <div>
                  <strong>{appt.patientName}</strong>
                  <p>{appt.problem}</p>
                </div>
                <span className="time">{appt.time}</span>
              </div>
            ))}
          </div>

          {/* ================= PATIENT DETAILS (STATIC FOR NOW) ================= */}
          <div className="card large">
            <h3>Patient Details</h3>

            <div className="patient-header">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="patient"
              />
              <div>
                <h4>Rahul Mehta</h4>
                <p>Cardiology Patient</p>
              </div>
            </div>

            <div className="patient-info">
              <p>
                <strong>D.O.B:</strong> 12 Jan 1995
              </p>
              <p>
                <strong>Sex:</strong> Male
              </p>
              <p>
                <strong>Height:</strong> 175 cm
              </p>
              <p>
                <strong>Weight:</strong> 70 kg
              </p>
              <p>
                <strong>Last Visit:</strong> 02 Jan 2026
              </p>
              <p>
                <strong>Registered:</strong> 15 Mar 2023
              </p>
            </div>

            <div className="patient-buttons">
              <button className="primary-btn">Call</button>
              <button className="outline-btn">Documents</button>
              <button className="outline-btn">Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
