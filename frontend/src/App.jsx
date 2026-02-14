import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import HospitalList from "./components/HospitalList";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToHash from "./utils/ScrollToHash";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HospitalsAll from "./pages/HospitalsAll/HospitalsAll.jsx";
import ShowHospital from "./pages/ShowHospital/ShowHospital.jsx";
import ShowDoctor from "./pages/ShowDoctor/ShowDoctor"; // your doctor page

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>
        {/* Home Page */}
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

        {/* All Hospitals Page */}
        <Route path="/hospitals" element={<HospitalsAll />} />

        {/* Single Hospital Details Page */}
        <Route path="/hospitals/:id" element={<ShowHospital />} />

        {/* ✅ ADD THIS */}
        <Route path="/doctors/:id" element={<ShowDoctor />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
