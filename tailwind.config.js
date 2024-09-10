/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/HomePage.js",
    "./src/pages/Product.js",
    "./src/pages/Collections.js",
    "./src/pages/Cart.js",
    "./src/components/Navbar.js",
    "./src/components/Faq.js",
    "./src/components/Footer.js",
    "./src/components/Announcement.js",
    

  ],
  theme: {
    extend: {
      screens: {
        '950': '950px',
        'ml': '425px',
        'mm': '375px',
        'ms': '320px',
      },
      margin: {
        '14px': '14px',
      },
      colors: {
        'red': '#FF0000',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

