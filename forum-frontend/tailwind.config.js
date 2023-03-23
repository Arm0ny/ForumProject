/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#617DBC",
      secondary: "#FFFFFF",
      accent: "#3D5AF1",
      danger: "#fecdd3",
      none: "rgba(0,0,0,0%)",
      textColor: "#1d1d1d",
      'accent-light' : '#F4F6FF'
    },

    fontFamily: {
      primary: ["Inter"],
      secondary: ["Raleway"],
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.625rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "1.25rem",
      xl: "1.5rem",
    },

    extend: {},
  },

  plugins: [],
};
