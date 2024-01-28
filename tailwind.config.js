/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins' ,'sans-sarif'],
        dmsans: ['DM Sans', 'sans-sarif']
      },
      colors: {
        primary: {
          DEFAULT: '#FF592C;',
          purple:'#9757D7',
          pink: '#EF466F',
          green:'#45B36B',

        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

