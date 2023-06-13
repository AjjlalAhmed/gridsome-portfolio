/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#f1f7fd",
        white: "#fff",
        black: "#000",
        primary: "#BAFF29",
        secondary: "#0C1618",
        "secondary-light": "#142528",
        accent: "#3b2107",
      },
    },
  },
  plugins: [],
};
