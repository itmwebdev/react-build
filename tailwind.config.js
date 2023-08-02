/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#091120",
        secondary: "#DFD5A5",
        opacitySec: "rgba(228, 220, 180, 0.3)",
        textWhite: "rgba(255, 255, 255, 0.7)",
        textHeader: "rgba(255, 255, 255, 0.9)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

