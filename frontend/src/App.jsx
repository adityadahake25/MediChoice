import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import HospitalList from "./components/HospitalList";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToHash from "./utils/ScrollToHash";
import ChatWidget from "./components/ChatWidget";

/* ================= PAGES ================= */

import HospitalsAll from "./pages/HospitalsAll/HospitalsAll.jsx";
import ShowHospital from "./pages/ShowHospital/ShowHospital.jsx";
import ShowDoctor from "./pages/ShowDoctor/ShowDoctor";
import Comparison from "./pages/Comparison/Comparison";

import Estimator from "./pages/Estimator/Estimator.jsx";
import EMICard from "./pages/EMICard/EMICard.jsx";
import Crowdfunding from "./pages/Crowdfunding/Crowdfunding.jsx";
import Fundraiser from "./pages/Fundraiser/Fundraiser.jsx";

import AllTreatments from "./pages/AllTreatments/AllTreatments.jsx";
import TreatmentInfo from "./pages/TreatmentInfo/TreatmentInfo.jsx"; // ✅ USE THIS

import SignUp from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";

import PatientDashboard from "./pages/Dashboards/PatientDashboard";
import Dashboard from "./pages/DoctorDashboard/Dashboard";
import Schedule from "./pages/SidebarExtras/Schedule";
import Patients from "./pages/SidebarExtras/Patients";
import Messages from "./pages/SidebarExtras/Messages";
import Medicines from "./pages/SidebarExtras/Medicines";

import BookAppointment from "./pages/BookAppointment/BookAppointment.jsx";

/* ================= LAYOUT ================= */

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

        {/* ================= DOMAIN PAGE ================= */}
        <Route path="/domain" element={<AllTreatments />} />

        {/* ================= TREATMENT DETAILS ================= */}
        <Route path="/treatments/:slug" element={<TreatmentInfo />} />

        {/* ================= AI ESTIMATOR ================= */}
        <Route path="/estimate" element={<Estimator />} />

        {/* ================= EMI ================= */}
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
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/campaigns" element={<Comparison />} />

        {/* ================= AUTH ================= */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* ================= HOSPITALS ================= */}
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

        {/* ================= BOOKING ================= */}
        <Route path="/book/:doctorId" element={<BookAppointment />} />
      </Routes>

      {!hideLayout && <ChatWidget />}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
