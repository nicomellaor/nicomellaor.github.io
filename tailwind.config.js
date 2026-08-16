/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#111827',
        panel: '#1f2937',
        text: '#f9fafb',
        muted: '#cbd5e1',
        accent: {
          DEFAULT: '#f3f4f6',
          dark: '#d1d5db',
          bg: 'rgba(255,255,255,0.12)'
        }
      }
    }
  },
  plugins: [],
}
