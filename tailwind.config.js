/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens:{
        'sm' : {'min':'640px'},
        'sm_2': {'min':'320px'},
        'md_2': {'max':'1280px','min': '600px'  },
        'md': { 'min' : '768px' },
        'lg_2': {'min': '960px'},
        'xl' : { 'min' : '1280px'}
    },
  },
  plugins: [],
}

