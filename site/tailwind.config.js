/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./_site/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#10b981',
        dark: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}