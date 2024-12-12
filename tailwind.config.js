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
      'grey': '#d4d4d4'
    },
    extend: {
      fontFamily:{
        ledger: ['Ledger', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

