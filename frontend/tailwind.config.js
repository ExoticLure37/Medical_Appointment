/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#0067FF",
        yellowColor: "#FEb60c",
        purplecolor: "#9771FF",
        irisBLueColor: "#01B5c5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },

      boxShadow:{
        panelShadow:"rgba(17,12,46 ,0.15)"
      },
    },
  },
  plugins: [],
}

