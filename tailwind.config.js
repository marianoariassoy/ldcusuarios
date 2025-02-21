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
          'base-content': '#828282',
          primary: '#9acb8a',
          secondary: '#666666',
          'base-100': '#262626',
          'base-300': '#202020'
        }
      }
    ]
  }
}
