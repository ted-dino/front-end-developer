/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#100e1d",
        "color-secondary": "#1e213a",
        "text-primary": "#e7e7eb",
        "text-secondary": "#a09fb1",
        "text-accent": "#88869d",
        "btn-primary": "#6e707a",
        "btn-secondary": "#585676",
        "btn-accent": "#3c47e9",
      },
    },
  },
  plugins: [],
};
