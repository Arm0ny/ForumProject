/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors : {
      primary : {
        DEFAULT : '#617DBC'
      },
      secondary : {
        DEFAULT: '#F9F9F9'
      },
      accent : {
        DEFAULT: '#1F53E4'
      }
    },

    extend: {},
  },

  plugins: [],
}
