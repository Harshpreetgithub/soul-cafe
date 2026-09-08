import React, { useState } from "react";
import { Coffee, Sandwich, IceCreamCone, Leaf, Download } from "lucide-react";
import { MENU_TABS, MENU_ITEMS } from "../data/menu.js";

const ICONS = { coffee: Coffee, sandwich: Sandwich, "ice-cream-cone": IceCreamCone };

export default function MenuSection() {
  const [active, setActive] = useState("coffee");
  const items = MENU_ITEMS[active];

  return (
    <section id="menu" className="bg-cream px-6 sm:px-10 lg:px-16 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-semibold">
              From the Kitchen &amp; Bar
            </h2>
            <p className="mt-3 max-w-md text-muted">
              A small taste of what's brewing — every dish made fresh, vegetarian
              &amp; Jain-friendly throughout.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-espresso/10 pb-6">
          {MENU_TABS.map((tab) => {
            const Icon = ICONS[tab.icon];
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors duration-300 ${
                  isActive
                    ? "border-amber bg-espresso text-cream"
                    : "border-espresso/15 bg-transparent text-muted hover:border-espresso/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Item grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="menu-card overflow-hidden rounded-xl border border-espresso/10 bg-white/40"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                {item.veg && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-cream/95 px-2.5 py-1 text-[11px] text-[#4C5A3D]">
                    <Leaf className="w-3 h-3" />
                    {item.jain ? "Jain" : "Veg"}
                  </span>
                )}
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg text-espresso font-semibold">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted">{item.desc}</p>
                </div>
                <span className="shrink-0 whitespace-nowrap pt-1 text-amber-deep">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/Soul_Cafe_Menu(1).pdf"
            download
            className="btn-dark-outline flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium hover:bg-espresso/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Full PDF Menu
          </a>
        </div>
      </div>
    </section>
  );
}
