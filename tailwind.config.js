/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1C12",
        "espresso-dark": "#1C120B",
        cream: "#F6EFE4",
        oat: "#EFE4D2",
        amber: "#C98A4B",
        "amber-deep": "#A8672E",
        sage: "#6E7A5C",
        muted: "#5B4A3A",
        "muted-light": "#B39C82",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(201,138,75,.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(201,138,75,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(201,138,75,0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.2s infinite",
      },
    },
  },
  plugins: [],
};
