/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgs: {
          100: '#0a192f',
          200: '#378f87'
        },
        ascent: {
          // grey
          100: '#1D2B2E',
          // orange
          200: '#B04828',
          // white
          300: '#ccc',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto'],
        inter: ['Calistoga'],
        ubuntu: ['Ubuntu'],
      },
    },
  },
  plugins: [],
}
