/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#191520",
        darkblue: "#294566",
        fwhite: "#f0efdf",
        green: "#4b7c52",
        gray: "#2a2d3c",
      },
      fontFamily: {
        mainfont: ["BreatheFire", "sans-serif"],
      },
    },
  },
  plugins: [],
};