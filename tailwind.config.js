/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container" : "1200px"
      },
      fontFamily:{
        man: ['Manrope', 'sans-serif']
      },
      colors :{
        primary:'#3734A9'
      }

    },
  },
  plugins: [],
}
