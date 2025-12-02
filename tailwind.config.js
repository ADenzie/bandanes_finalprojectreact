/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        keshiRed: '#8B0000',
        keshiLight: '#FFF5F5',
      },
    },
  },
  plugins: [],
}