/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'denton': ['DentonVariableTest-VF', 'serif'],
        'cabinet': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      colors: {
        'black': '#342D32',
        'bg': '#FFE9CA',
        'accent': '#FBB95D',
        'gray1': '#9B9B9B',
        'gray2': '#B5B5B5'
      }
    },
  },
  plugins: [],
}