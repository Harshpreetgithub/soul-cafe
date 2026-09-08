import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CAFE_INFO } from "../data/menu.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const orderingPlatforms = [
    { name: "Swiggy", url: CAFE_INFO.swiggyUrl },
    { name: "Zomato", url: CAFE_INFO.zomatoUrl },
    { name: "District", url: CAFE_INFO.districtUrl },
    { name: "MagicPin", url: CAFE_INFO.magicpinUrl },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-cream">
          <img 
            src="/logo.png" 
            alt="Soul Cafe Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="font-serif text-lg font-semibold">Soul Cafe</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#E4D7C4]">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#ambiance" className="nav-link">Ambiance</a>
          <a href="#reserve" className="nav-link">Book Table</a>
          <a href="#location" className="nav-link">Contact</a>
        </nav>

        <div 
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2"
          >
            Order Online
            <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-espresso-dark border border-white/10 rounded-lg shadow-lg overflow-hidden">
              {orderingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-[#E4D7C4] hover:bg-amber/20 hover:text-amber transition-colors"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
