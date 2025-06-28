import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      {/* Navbar with Holistic+ branding */}
      <Navbar />

      {/* Hero Section: Main introduction */}
      <Hero />

      {/* Info Section: Highlight key features */}
      <Info />

      {/* About Section: About Holistic+ and services */}
      <About />

      {/* Book Appointment: Reasons to choose and call-to-action */}
      <BookAppointment />

      {/* Reviews Section: Real feedback from Indian users */}
      <Reviews />

      {/* Doctors Section: Expert panel of certified professionals */}
      <Doctors />

      {/* Footer: Contact, navigation, and branding */}
      <Footer />
    </div>
  );
}

export default Home;
