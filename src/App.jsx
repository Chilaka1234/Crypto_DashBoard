// Main application component

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

import FeaturesSection from "./sections/FeaturesSection";
import SolutionsSection from "./sections/SolutionsSection";
import EcosystemSection from "./sections/EcosystemSection";

import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <About/>

      {/* Features Section */}
      <FeaturesSection />

      {/* Dynamic Solutions Section */}
      <SolutionsSection />

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;