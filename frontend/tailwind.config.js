/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        firestation: "url('/images/CaserneGerland.jpg')",
      },
    },
  },
  plugins: [],
};
