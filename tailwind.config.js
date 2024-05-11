/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm_2: "320",
        md_2: "600px",
        lg_2: "960px",
      }
    },
  },
  plugins: [],
}

