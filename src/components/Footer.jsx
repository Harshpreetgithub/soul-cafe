import React from "react";
import { CAFE_INFO } from "../data/menu.js";

export default function Footer() {
  return (
    <footer className="bg-espresso-dark text-muted-light text-center text-xs py-8 px-6">
      Soul Cafe · Ashok Vihar Phase 2, Delhi · {CAFE_INFO.phoneDisplay}
    </footer>
  );
}
