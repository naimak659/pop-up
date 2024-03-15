/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
      colors: {
        csDark: "#070F2B",
        csBG: "#27374D",
        csBTN: "#9DB2BF",
        csText: "#DDE6ED",
      },
    },
  },
  plugins: [],
};
