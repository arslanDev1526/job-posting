/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'sm_2': '320px',
      'md': '768px',
      'md_2': {'max':'1280px','min': '600px'  },
      'lg': '960px',
      'lg_2': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
   
  },
  plugins: [],
}