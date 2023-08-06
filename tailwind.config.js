/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens:{
      'sm': '10px',
      'md': '601px',
      'lg': '1001px',
      'xl': '1551px',
      '2xl': '1921px',
    },
    fontFamily: {
      'founders-grosteskers': ['Founders Grotesk', 'sans-serif'],
      'untitled-sans': ['Untitled Sans', 'serif'],
    },
    colors:{
      black: '#272727',
      white: '#fff',
      transparent: 'rgba(255, 255, 255, 0)',
      green: '#008c35',
      'mid-green': '#68a678',
      'light-green': '#8db53b',
      crimson: '#b40023',
      'light-crimson': '#dd231b',
      gray: '#cccccc',
      'dark-blue': '#003a6a',
      blue: '#016bc3',
      'mid-blue': '#69b9fc',
      'light-blue': '#9fd3ff',
      'light-baby-blue': '#dee9ff',
      'baby-blue': '#f1f4fa'
    },
    extend: {},
  },
  plugins: [],
}

