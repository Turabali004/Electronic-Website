// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BCCDE0',
        secondary: '#EC3D2F',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
