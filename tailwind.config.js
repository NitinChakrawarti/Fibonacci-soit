/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-glow': [
          '0 0 2px #fffafa',
          '0 0 5px #fffafa',
          '0 0 10px #fffafa',
          '0 0 100px #fffafa',
        ],
      },
      colors:{
        // primary:"#41b583",
        primary:"#55e6a4",
        primary_dark:"#106961",
        text_dark:"#0f0e0c",
        text_light:"#fffafa",
        secondary:"#b0eb00",
      }
    },
  },
  plugins: [],
}

