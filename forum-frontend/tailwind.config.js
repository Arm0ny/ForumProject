/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#617DBC",
      },
      secondary: {
        DEFAULT: "#FFFFFF",
      },
      accent: {
        DEFAULT: "#3D5AF1",
      },
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.625rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },

    extend: {},
  },

  plugins: [],
};
