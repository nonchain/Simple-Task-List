/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '390px',
        md: '540px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
      },
      colors: {
        background: '#F8FFF8',
        primary: '#7DCE13',
        title: '#282D2B',
        text: '#585D5B',
        light: {
          100: '#F5FCEB',
          200: '#EAEAEA',
          300: '#959C9B',
          400: '#686D6B',
        }
      },
    },
  },
  plugins: [],
}
