/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "Noto Sans Myanmar", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Lora", "Noto Serif Myanmar", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
