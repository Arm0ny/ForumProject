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
        DEFAULT: '#FFFFFF'
      },
      accent : {
        DEFAULT: '#1F53E4'
      }
    },

    extend: {},
  },

  plugins: [],
}
