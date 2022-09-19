/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: 'url(/background-galaxy.png)',
        'nwl-gradient': 'linear-gradient(89.86deg, #9572FC 00.0%, #43E7AD 50%, #E1D55D 100%);',
        'gamelabel-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('on', '&[data-state="on"]')
    }),
  ],
}
