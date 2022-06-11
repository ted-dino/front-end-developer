module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary: "rgba(51, 51, 51, 1)",
        secondary: "rgba(130, 130, 130, 1)",
        accent: "rgba(79, 79, 79, 1)",
        "btn-primary": "rgba(235, 87, 87, 1)",
      },
    },
  },
  plugins: [],
};
