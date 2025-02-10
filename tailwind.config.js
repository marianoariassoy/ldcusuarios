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
          'base-content': '#848484',
          primary: '#9acb8a',
          secondary: '#666',
          'base-100': '#202020',
          'base-300': '#252525'
        }
      }
    ]
  }
}
