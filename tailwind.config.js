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
          'base-content': '#b1b1b1',
          primary: '#9acb8a',
          secondary: '#6f6f6f',
          'base-100': '#292929',
          'base-300': '#202020'
        }
      }
    ]
  }
}
