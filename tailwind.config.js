/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
      'white': '#fff',
      'black':'#000',
      'grey': '#979797'
    },
    extend: {
      fontFamily:{
        goudy: ['Goudy Old Style', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

