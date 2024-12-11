/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'grotesk': ['Space Grotesk', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      'yellow': '#FEE032',
      'black': '#1E1E1E',
      'blue': '#3060B7',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}

