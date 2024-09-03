/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/HomePage.js",
    "./src/components/Navbar.js"

  ],
  theme: {
    extend: {
      screens: {
        '950': '950px',
      },
      margin: {
        '14px': '14px',
      },
      colors: {
        'red': '#FF0000',
      },
    },
  },
  plugins: [],
}

