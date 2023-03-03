/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(.8)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0.8' },
          '100%': {  opacity: '1'  }
        },
        
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s linear 1',
      }
    },
  },
  plugins: [],
}