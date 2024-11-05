/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
    colors: {
      
      'greenRoot': '#4c9526',
      'grayRoot':'#ecf0f1',
      'pinkRoot':'#e12675',
      'violet':'#EDE9FE'
    },
    backgroundImage: {
      'products': "url('/master/src/assets/tree.jpg')",
      'consult':"url('/master/src/assets/consult.jpg')"
    },fontFamily: {
      'irish': ['Irish Grover', 'sans-serif'],
    },
  },
  plugins: [],
}

