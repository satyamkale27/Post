/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js"],
  theme: {
    extend: {
      width: {
        custom: "650px", // Define your custom width here
      },
      colors: {
        peach: "#FFE8CC",
      },
    },
  },
  plugins: [],
};
