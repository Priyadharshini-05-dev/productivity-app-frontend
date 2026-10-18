/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F8F7FF',
          100: '#EFEBFF',
          200: '#DDD5FF',
          500: '#9B87F5',
          600: '#8065E8',
        },
        rose: {
          50: '#FFF5F7',
          100: '#FFE4EC',
          500: '#F28BA8',
        },
        mint: {
          50: '#F0FFF8',
          100: '#D6F8E8',
          500: '#65CDA5',
        },
      },
    },
  },
  plugins: [],
}

