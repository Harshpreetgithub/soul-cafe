import React from "react";
import { Coffee, Leaf, Users } from "lucide-react";

const FEATURES = [
  { icon: Coffee, label: "100% Specialty Roasted Beans" },
  { icon: Leaf, label: "Vegetarian & Jain Friendly Options" },
  { icon: Users, label: "Cozy Space for Small Gatherings" },
];

export default function Features() {
  return (
    <section className="bg-cream py-16 px-6 sm:px-10 lg:px-16 border-b border-espresso/8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-10">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="feature-item flex flex-col items-start gap-4">
            <div className="feature-icon w-12 h-12 rounded-full bg-oat flex items-center justify-center">
              <Icon className="w-5 h-5 stroke-espresso" />
            </div>
            <p className="text-espresso font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
