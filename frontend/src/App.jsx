import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import HospitalList from "./components/HospitalList";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"; // ✅ ADD THIS

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />

      {/* 🏥 Top Hospitals Section */}
      <HospitalList />

      {/* 💊 Treatments Section */}
      <Treatments />

      {/* 💬 Testimonials Section */}
      <Testimonials />

      {/* 🦶 Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
