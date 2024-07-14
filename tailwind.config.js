/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js"],
  theme: {
    extend: {
      width: {
        custom: "650px",
        imgwdt: "455px",
      },
      colors: {
        peach: "#FFE8CC",
      },
    },
  },
  plugins: [],
};
