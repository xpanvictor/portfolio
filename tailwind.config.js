/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ascent: {
          // grey
          100: '#1D2B2E',
          // orange
          200: '#B04828',
          // green
          300: '#259B2F',
        },
      }
    },
  },
  plugins: [],
}
