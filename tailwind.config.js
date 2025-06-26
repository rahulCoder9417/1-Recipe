/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgb(26, 25, 25)'
      },
      fontFamily: {
          op: ['Playwrite DE Grund', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

