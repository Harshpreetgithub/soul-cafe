import React from "react";
import { MapPin, Clock, Phone, BadgeIndianRupee } from "lucide-react";
import { CAFE_INFO } from "../data/menu.js";

export default function Location() {
  return (
    <section id="location" className="bg-espresso text-cream px-6 sm:px-10 lg:px-16 py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">Find Us</h2>

          <div className="mt-8 space-y-6">
            <div className="info-row flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-amber shrink-0" />
              <p className="text-[#E4D7C4] leading-relaxed">{CAFE_INFO.address}</p>
            </div>

            <div className="info-row flex items-start gap-4">
              <Clock className="w-5 h-5 mt-1 text-amber shrink-0" />
              <div>
                <p className="text-[#E4D7C4]">{CAFE_INFO.hoursSummary}</p>
                <p className="text-xs text-muted-light mt-1">{CAFE_INFO.hoursNote}</p>
              </div>
            </div>

            <a href={`tel:${CAFE_INFO.phoneE164}`} className="info-row flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 text-amber shrink-0" />
              <p className="text-[#E4D7C4]">{CAFE_INFO.phoneDisplay}</p>
            </a>

            <div className="info-row flex items-start gap-4">
              <BadgeIndianRupee className="w-5 h-5 mt-1 text-amber shrink-0" />
              <p className="text-[#E4D7C4]">
                {CAFE_INFO.priceForTwo} for two · Dine-in · Takeaway · Delivery
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CAFE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
            >
              Get Directions
            </a>
            <a
              href={`tel:${CAFE_INFO.phoneE164}`}
              className="btn-outline rounded-full px-6 py-3 text-sm font-medium"
            >
              Call Cafe
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 h-80 lg:h-full min-h-[320px]">
          <iframe
            title="Soul Cafe location map"
            className="w-full h-full"
            style={{ filter: "sepia(8%) grayscale(15%) contrast(1.05)" }}
            src={`https://www.google.com/maps?q=${CAFE_INFO.lat},${CAFE_INFO.lng}&hl=en&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-amber animate-pulseDot" />
        </div>
      </div>
    </section>
  );
}
