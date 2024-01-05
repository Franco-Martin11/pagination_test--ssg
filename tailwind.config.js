module.exports = {
  presets: [require('@vercel/examples-ui/tailwind')],
  theme: {
    extend: {
      colors: {
        oliveGreen: '#8F8868',
        lightBeige: '#E0D6C2',
        saddleBrown: '#976C54',
        warmGray: '#B5A38D',
        darkBrown: '#342415',
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vercel/examples-ui/**/*.js',
  ],
}
