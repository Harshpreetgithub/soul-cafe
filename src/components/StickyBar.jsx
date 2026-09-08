import React, { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CAFE_INFO } from "../data/menu.js";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waNumber = CAFE_INFO.phoneE164.replace("+", "");

  return (
    <div
      id="sticky-bar"
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-espresso-dark border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3 ${
        visible ? "show" : ""
      }`}
    >
      <a
        href={`https://wa.me/${waNumber}?text=Hi%20Soul%20Cafe%2C%20I%27d%20like%20to%20order`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-sage text-cream py-3 text-sm font-medium transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4" />
        Order via WhatsApp
      </a>
      <a
        href={`tel:${CAFE_INFO.phoneE164}`}
        className="flex-1 flex items-center justify-center gap-2 rounded-full btn-primary py-3 text-sm font-medium transition-transform active:scale-95"
      >
        <Phone className="w-4 h-4" />
        Call Cafe
      </a>
    </div>
  );
}
