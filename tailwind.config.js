/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: '#B7BDC6',
        lightblack: '#474D57',
        white: '#FFFFFF',
        notblack: '#F5F5F5',
        darktext: '#1E2329',
        yellow: '#FCD535'
      }
    },
  },
  plugins: [],
}

