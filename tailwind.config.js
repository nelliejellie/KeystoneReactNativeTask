/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#4D2DEC',
        themeGreen: '#1A8F5A',
        themeRed: '#DB0000',
        themeGrey: '#F5F7FF',
      },
    },
  },
  plugins: [],
};