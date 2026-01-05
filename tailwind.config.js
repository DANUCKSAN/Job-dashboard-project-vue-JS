/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        san:['poppins','sans-derif'],
      },
      gridTemplateColumns:{
        '70/30':'70% 28%'
      },
    },
  },
  plugins: [],
}

