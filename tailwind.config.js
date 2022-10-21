/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBlue: "#01233C",
        ltNavyBlue: "#01172C",
      },
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
