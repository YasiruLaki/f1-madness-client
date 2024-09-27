/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/HomePage.js",
    "./src/pages/Product.js",
    "./src/pages/Collections.js",
    "./src/pages/Cart.js",
    "./src/pages/OrderSuccess.js",
    "./src/pages/Search.js",
    "./src/pages/Contact.js",
    "./src/pages/About.js",
    "./src/pages/FAQs.js",
    "./src/pages/Terms&Conditions.js",
    "./src/pages/Shipping.js",
    "./src/pages/Returns.js",
    "./src/pages/PrivacyPolicy.js",
    "./src/pages/GiftCards.js",
    "./src/pages/CharitableInitiatives.js",
    "./src/components/Navbar.js",
    "./src/components/Faq.js",
    "./src/components/Footer.js",
    "./src/components/Announcement.js",
    "./src/components/loadingScreen.js",
    "./src/components/Alert.js",
    "./src/components/YtEmbed.js",
    "./src/components/Newsletter.js",
    "./src/components/Feedback.js",
    "./src/components/Contact.js",

  ],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
      },
      fontWeight: {
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
      },
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
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),

  ]
}

