import React from "react";
import Navbar from "../components/cafe/Navbar";
import Hero from "../components/cafe/Hero";
import FeaturedDrinks from "../components/cafe/FeaturedDrinks";
import SpecialsSection from "../components/cafe/SpecialsSection";
import Gallery from "../components/cafe/Gallery";
import Footer from "../components/cafe/Footer";
import '../style/LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDrinks />      
      <SpecialsSection />      
      <Gallery />             
      <Footer />
    </div>
  );
};

export default LandingPage;
