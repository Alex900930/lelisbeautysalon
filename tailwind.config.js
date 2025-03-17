module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        playfair: ['var(--font-playfair)'],
        cormorant: ['var(--font-cormorant)'],
      },
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          dark: '#B4941F',
        },
        secondary: {
          DEFAULT: '#2C1810',
          light: '#4A2A1D',
        },
      },
    },
  },
  plugins: [],
}