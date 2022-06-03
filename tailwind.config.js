module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1100px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '700px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '500px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
    extend: {},
  
  plugins: [],
}
