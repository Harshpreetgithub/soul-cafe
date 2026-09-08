import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import MenuSection from "./components/MenuSection.jsx";
import Ambiance from "./components/Ambiance.jsx";
import Reservation from "./components/Reservation.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import StickyBar from "./components/StickyBar.jsx";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <Ambiance />
      <Reservation />
      <Location />
      <Footer />
      <StickyBar />
    </div>
  );
}
