/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FDFDFD',
      'green': '#4A974D',
      'blue': '#2196F3',
      'gold': '#DCAD39',
      'peach': '#FFCC70',
      'tomato': '#F44336',
      'green1': '#08A908',
      'gray0': '#999999 ',
      'gray1': '#CCCCCC ',
      'gray2': '#666666',
      'black': '#000000',
      'grey': '#D9D9D9',
      
    
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    poppins: ['Poppins', 'sans-serif'],
    montserrat: ['Montserrat', 'sans-serif']
  },
    extend: {},
  },
  plugins: [],
}