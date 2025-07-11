

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection reverse={true} />
     
      <ContactForm />
      <Footer />
    </>
  );
}
