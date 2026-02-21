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

// AI Estimator
import Estimator from "./pages/Estimator/Estimator.jsx";

// EMI Calculator
import EMICard from "./pages/EMICard/EMICard.jsx";

// Treatments
import AllTreatments from "./pages/AllTreatments/AllTreatments.jsx";
import TreatmentInfo from "./pages/TreatmentInfo/TreatmentInfo.jsx";

// Crowdfunding
import Crowdfunding from "./pages/Crowdfunding/Crowdfunding.jsx";

// 🔥 ADD THIS IMPORT
import CampaignList from "./pages/Comparison/Comparison.jsx";

// Auth
import SignUp from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";

// Dashboards
import PatientDashboard from "./pages/Dashboards/PatientDashboard";
import Dashboard from "./pages/DoctorDashboard/Dashboard";
import Schedule from "./pages/SidebarExtras/Schedule";
import Patients from "./pages/SidebarExtras/Patients";
import Messages from "./pages/SidebarExtras/Messages";
import Medicines from "./pages/SidebarExtras/Medicines";

// Booking
import BookAppointment from "./pages/BookAppointment/BookAppointment.jsx";

// Chatbot
import ChatWidget from "./components/ChatWidget";

/* ================= Layout Wrapper ================= */
function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      <ScrollToHash />

      <Routes>
        {/* ================= HOME ================= */}
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

        {/* ================= TREATMENTS ================= */}
        <Route path="/treatments" element={<AllTreatments />} />
        <Route path="/alltreatments" element={<AllTreatments />} />
        <Route path="/treatments/:slug" element={<TreatmentInfo />} />

        {/* ================= AI ESTIMATOR ================= */}
        <Route path="/estimate" element={<Estimator />} />

        {/* ================= EMI CALCULATOR ================= */}
        <Route
          path="/emi"
          element={
            <div
              style={{
                padding: "100px 20px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#f4f7f6",
              }}
            >
              <EMICard />
            </div>
          }
        />

        {/* ================= CROWDFUNDING ================= */}
        <Route path="/crowdfunding" element={<Crowdfunding />} />

        {/* 🔥 PUBLIC CAMPAIGN LIST PAGE */}
        <Route path="/campaigns" element={<CampaignList />} />

        {/* ================= AUTH ================= */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* ================= HOSPITALS & DOCTORS ================= */}
        <Route path="/hospitals" element={<HospitalsAll />} />
        <Route path="/hospitals/:id" element={<ShowHospital />} />
        <Route path="/doctors/:id" element={<ShowDoctor />} />
        <Route path="/compare" element={<Comparison />} />

        {/* ================= DASHBOARDS ================= */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<Dashboard />} />
        <Route path="/doctor/schedule" element={<Schedule />} />
        <Route path="/doctor/patients" element={<Patients />} />
        <Route path="/doctor/messages" element={<Messages />} />
        <Route path="/doctor/medicines" element={<Medicines />} />

        {/* ================= BOOK APPOINTMENT ================= */}
        <Route path="/book/:doctorId" element={<BookAppointment />} />
      </Routes>

      {!hideLayout && <ChatWidget />}
      {!hideLayout && <Footer />}
    </>
  );
}

/* ================= APP ================= */
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
