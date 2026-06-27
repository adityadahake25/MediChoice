import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { User, Phone, Mail, Calendar, Clock, FileText } from "lucide-react";
import "./BookAppointment.css";

const BookAppointment = () => {
  const { doctorId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    patientName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    problem: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      alert("Please login first");

      navigate("/login", {
        state: {
          from: location.pathname,
        },
      });

      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/appointments/book",
        {
          doctorId,
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        },
      );

      alert("Appointment Booked Successfully!");

      setFormData({
        patientName: "",
        dob: "",
        gender: "",
        mobile: "",
        email: "",
        problem: "",
        date: "",
        time: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Error booking appointment");
    }
  };

  return (
    <div className="book-wrapper">
      <div className="book-card">
        <h2>Book Appointment</h2>
        <p className="subtitle">Fill in your details to confirm consultation</p>

        <form onSubmit={handleSubmit}>
          {/* Patient Name */}
          <div className="input-group">
            <User className="icon" />
            <input
              type="text"
              name="patientName"
              placeholder="Full Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOB & Gender */}
          <div className="row">
            <div className="input-group">
              <Calendar className="icon" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Mobile & Email */}
          <div className="row">
            <div className="input-group">
              <Phone className="icon" />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <Mail className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Problem */}
          <div className="input-group textarea-group">
            <FileText className="icon" />
            <textarea
              name="problem"
              placeholder="Describe your problem"
              value={formData.problem}
              onChange={handleChange}
              required
            />
          </div>

          {/* Appointment Date & Time */}
          <div className="row">
            <div className="input-group">
              <Calendar className="icon" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <Clock className="icon" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="book-btn">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
