const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '10%': '10%'
    },

    extend: {
      margin: {
        '100': '-70rem'
      },
      colors: {
        'bg-sb_bg': '#27272a',
      },
    },
  },
  plugins: [],
}