/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#191715',
        panel: '#23201c',
        text: '#eceae6',
        muted: '#b2ada4',
        accent: {
          DEFAULT: '#f2a1a1',
          dark: '#e07a7a',
          bg: 'rgba(242,161,161,0.20)'
        }
      }
    }
  },
  plugins: [],
}
