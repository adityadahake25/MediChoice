import React from "react";
import {
  FaThLarge,
  FaCalendarAlt,
  FaUserInjured,
  FaEnvelope,
  FaCapsules,
  FaSignOutAlt
} from "react-icons/fa";
import "./DoctorSidebar.css";

const DoctorSidebar = () => {
  return (
    <div className="sidebar">
      
      {/* PROFILE SECTION */}
      <div className="sidebar-profile">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="doctor"
          className="sidebar-avatar"
        />
        <h3>Dr. Anjali Sharma</h3>
        <p>Cardiologist</p>
      </div>

      <div className="sidebar-divider"></div>

      {/* MENU */}
      <div className="sidebar-menu">
        <div className="sidebar-item active">
          <FaThLarge />
          <span>Dashboard</span>
        </div>

        <div className="sidebar-item">
          <FaCalendarAlt />
          <span>Schedule</span>
        </div>

        <div className="sidebar-item">
          <FaUserInjured />
          <span>Patients</span>
        </div>

        <div className="sidebar-item">
          <FaEnvelope />
          <span>Messages</span>
        </div>

        <div className="sidebar-item">
          <FaCapsules />
          <span>Medicines</span>
        </div>
      </div>

      {/* LOGOUT */}
      <div className="sidebar-logout">
        <div className="sidebar-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>

    </div>
  );
};

export default DoctorSidebar;
