const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        rose: colors.rose,
        yellow: colors.yellow,
        zinc: colors.zinc,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}