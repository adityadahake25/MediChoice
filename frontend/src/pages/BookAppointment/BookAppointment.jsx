import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookAppointment = () => {
  const { doctorId } = useParams(); // ✅ must be inside component

  const [formData, setFormData] = useState({
    patientName: "",
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

    try {
      await axios.post("http://localhost:5000/api/appointments/book", {
        ...formData,
        doctorId, // ✅ coming from URL
      });

      alert("Appointment Booked Successfully!");

      setFormData({
        patientName: "",
        problem: "",
        date: "",
        time: "",
      });
    } catch (error) {
      alert("Error booking appointment");
    }
  };

  return (
    <div className="book-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Your Name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <textarea
          name="problem"
          placeholder="Describe Problem"
          value={formData.problem}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookAppointment;
