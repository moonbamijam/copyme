/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      primary: "#76ABAE",
      "primary-variant": "#54898A",
      background: "#222831",
      surface: "#31363F",
      "surface-variant": "#444b57",
      error: "#C12A3E",
    },
    extend: {
      fontFamily: {
        poppins: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
