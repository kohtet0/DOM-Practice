/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "Padauk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
