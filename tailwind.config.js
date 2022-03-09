module.exports = {
  purge: ['./dist/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // # add new background image
      // https://tailwindcss.com/docs/background-image#background-images
      // backgroundImage: theme => ({
      //   'hero-image': "url('./img/hero-image.jpg')",
      // }),
      // # add new custom colors
      // https://tailwindcss.com/docs/customizing-colors#extending-the-defaults
      colors: {
        'surf-blue': {
          100: "#84D8EB",
          200: "#73D3E8",
          300: "#61CDE5",
          400: "#50C8E2",
          DEFAULT: "#38C1DF",
          500: "#2CBCDD",
          600: "#22B2D3",
          700: "#1FA3C1",
          800: "#1D95AF",
          900: "#1A869E",
        },
        'surf-black': { DEFAULT: "#17272b" },
        'surf-dark-gray': { DEFAULT: "#7a7a7a" },
        'surf-light-gray': { DEFAULT: "#eeeeee" },
        'surf-gray': { DEFAULT: "#dddddd" },
      },
      // # add new custom fonts (can use Google font or self-hosting)
      // https://tailwindcss.com/docs/font-family#customizing
      fontFamily: {
        'Roboto': "'Roboto', sans-serif",
        'Antic': "'Antic', san-serif",
        'Bebas': "'Bebas', san-serif",
      },
      // # add new custom font size 
      // https://tailwindcss.com/docs/font-size#font-sizes
      fontSize: {
        '10xl': '10rem'
      },
      // # add new custom flex
      flex: {
        'size-1': '1',
        'size-2': '2'
      },
    },
  },
  variants: {
    extend: {
      // # generate hover and active variants for ringColor
      // https://tailwindcss.com/docs/ring-color#variants
      ringColor: ['hover', 'active'],
    },

  },
  plugins: [

  ],
}