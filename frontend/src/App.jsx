import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import HospitalList from "./components/HospitalList";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToHash from "./utils/ScrollToHash";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HospitalsAll from "./pages/HospitalsAll/HospitalsAll.jsx";
import ShowHospital from "./pages/ShowHospital/ShowHospital.jsx";
import ShowDoctor from "./pages/ShowDoctor/ShowDoctor";
import Comparison from "./pages/Comparison/Comparison";

// FIXED: Using exact casing to match the folder/file
import Estimator from "./pages/Estimator/Estimator.jsx";

import SignUp from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";

// 1. Dashboard and Extra Imports
import PatientDashboard from "./pages/Dashboards/PatientDashboard";
import Dashboard from "./pages/DoctorDashboard/Dashboard";
import Schedule from "./pages/SidebarExtras/Schedule";
import Patients from "./pages/SidebarExtras/Patients";
import Messages from "./pages/SidebarExtras/Messages";
import Medicines from "./pages/SidebarExtras/Medicines";

// Importing booking appointment
import BookAppointment from "./pages/BookAppointment/BookAppointment.jsx";

// NEW: Import the ChatWidget component
import ChatWidget from "./components/ChatWidget";

// ADDED: Import the new EMICard component
import EMICard from "./pages/EMICard/EMICard.jsx";

/* ================= Layout Wrapper ================= */
function Layout() {
  const location = useLocation();

  // Hide Navbar, Footer, and Chatbot on auth pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      <ScrollToHash />

      <Routes>
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HowItWorks />
              <Features />
              <HospitalList />
              <Treatments />
              <Testimonials />
            </>
          }
        />

        {/* ================= AI ESTIMATOR PAGE ================= */}
        <Route path="/estimate" element={<Estimator />} />

        {/* ================= NEW: EMI CALCULATOR PAGE ================= */}
        <Route 
          path="/EMI" 
          element={
            <div style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center', backgroundColor: '#f4f7f6' }}>
              <EMICard />
            </div>
          } 
        />

        {/* ================= OTHER PAGES ================= */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hospitals" element={<HospitalsAll />} />
        <Route path="/hospitals/:id" element={<ShowHospital />} />
        <Route path="/doctors/:id" element={<ShowDoctor />} />
        <Route path="/compare" element={<Comparison />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        <Route path="/doctor-dashboard" element={<Dashboard />} />
        <Route path="/doctor/schedule" element={<Schedule />} />
        <Route path="/doctor/patients" element={<Patients />} />
        <Route path="/doctor/messages" element={<Messages />} />
        <Route path="/doctor/medicines" element={<Medicines />} />
        <Route path="/book/:doctorId" element={<BookAppointment />} />
      </Routes>

      {/* NEW: ChatWidget is added here so it persists across medical pages */}
      {!hideLayout && <ChatWidget />}

      {!hideLayout && <Footer />}
    </>
  );
}

// ONLY ONE App function is allowed!
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;