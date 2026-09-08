import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { CAFE_INFO } from "../data/menu.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full overflow-hidden bg-espresso-dark text-cream pt-20"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2000&auto=format&fit=crop"
          alt="Warm interior of Soul Cafe with wooden tables and hanging lights"
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-dark via-espresso-dark/85 to-espresso-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark via-transparent to-espresso-dark/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-2 text-[#D8B98C] text-sm">
            <Star className="w-4 h-4 text-amber fill-amber" />
            {CAFE_INFO.rating} ({CAFE_INFO.reviews} reviews) · Ashok Vihar, Phase 2, Delhi
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] font-semibold">
            Crafted Coffee &amp; Artisanal Eats in Ashok Vihar
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[#E4D7C4]/90">
            Unwind over freshly roasted beans, hand-crafted panouzzos, and cozy
            conversations.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#reserve" className="btn-primary rounded-full px-7 py-3.5 text-sm font-medium">
              Book a Table
            </a>
            <a
              href="#menu"
              className="btn-outline group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              View Digital Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 lg:right-10 hidden lg:block w-64 rounded-2xl border border-white/15 bg-espresso-dark/60 p-5 backdrop-blur-md">
          <p className="font-serif italic text-lg leading-snug text-cream">
            "Every cup is roasted small-batch, brewed to order."
          </p>
          <p className="mt-3 text-xs uppercase tracking-wider text-amber">
            100% Vegetarian Cafe &amp; Deli
          </p>
        </div>
      </div>
    </section>
  );
}
