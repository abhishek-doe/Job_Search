/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueColor": "#2a68ff",
        "greyIsh": "#f1f4f8",
        "cardShadow": "#f7f8f9",
        "textColor": "#252b36"
      },
      screens: {
        '2xl': { 'max': '1024px' },

        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
      }
    },
  },
  plugins: [],
}

