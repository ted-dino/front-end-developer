/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#334680",
      secondary: "#1E86FF",
      accent: "#B9BDCF",
      common: "#B7BCCE",
    },
    extend: {},
  },
  plugins: [],
};
