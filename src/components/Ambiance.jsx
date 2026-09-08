import React from "react";

export default function Ambiance() {
  return (
    <section id="ambiance" className="bg-oat px-6 sm:px-10 lg:px-16 py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-semibold">
            A Corner Built for Slow Mornings
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-md">
            Warm wood, low light, and the hum of the grinder — Soul Cafe is where
            Ashok Vihar comes to linger over a second cup, catch up with old
            friends, or take a quiet table for two.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
            className="menu-card rounded-xl w-full h-56 object-cover border border-espresso/10"
            alt="Cozy cafe seating"
          />
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
            className="menu-card rounded-xl w-full h-56 object-cover border border-espresso/10 mt-8"
            alt="Coffee being poured"
          />
        </div>
      </div>
    </section>
  );
}
