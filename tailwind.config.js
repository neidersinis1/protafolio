/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: ["Crimson Text", "Plus Jakarta Sans", "Roboto", "sans-serif"],
      // roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
