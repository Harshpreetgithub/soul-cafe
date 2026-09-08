import React from "react";
import { Coffee } from "lucide-react";
import { CAFE_INFO } from "../data/menu.js";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-cream">
          <Coffee className="w-5 h-5 text-amber" />
          <span className="font-serif text-lg font-semibold">Soul Cafe</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#E4D7C4]">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#ambiance" className="nav-link">Ambiance</a>
          <a href="#reserve" className="nav-link">Book Table</a>
          <a href="#location" className="nav-link">Contact</a>
        </nav>

        <a
          href={CAFE_INFO.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Order Online
        </a>
      </div>
    </header>
  );
}
