/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        blue: {
          50: "#F3F4F8",
          100: "#EBF5FF",
          200: "#F5F7FD",
          300: "#ECEFF5",
          400: "#F3F7FC",
          700: "#1E79D6",
          800: "#408CD9",
          900: "#00469F",
        },
        gray: {
          50: "#F8F8FA",
          300: "#B0B2B9",
          500: "#858894",
          600: "#ACAEB6",
          700: "#5D6373",
          800: "#393E50",
        },
        cyan: {
          900: "#1F425D",
        },
      },
      screens: {
        "2.5xl": "1620px",
        "3xl": "1760px",
        "4xl": "1800px",
        "5xl": "2000px",
      },
      dropShadow: {
        "3xl": "0 10px 10px rgba(22, 108, 200, 0.2)",
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "360px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
};
