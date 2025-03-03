/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#c3c3c3',
          primary: '#9acb8a',
          secondary: '#999',
          'base-100': '#292929',
          'base-300': '#202020'
        }
      }
    ]
  }
}
