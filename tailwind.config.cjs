const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,svelte,svx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      primary: colors.teal,
      secondary: colors.cyan,
      trasparent: colors.transparent,
      dark: {
        50: 'hsl(0,0%,29%)',
        100: 'hsl(0,0%,23.5%)',
        200: 'hsl(0,0%,19.6%)',
        300: 'hsl(0,0%,17.6%)',
        400: 'hsl(0,0%,13.3%)',
        500: 'hsl(0,0%,12.2%)',
        600: 'hsl(0,0%,11.4%)',
        700: 'hsl(0,0%,10.6%)',
        800: 'hsl(0,0%,9.4%)',
        900: 'hsl(0,0%,5.9%)'
      },
      light: {
        50: 'hsl(210,   99%,    99.0%)',
        100: 'hsl(210,  55%,    97.5%)',
        200: 'hsl(210,  45%,    96.2%)',
        300: 'hsl(210,  35%,    94.5%)',
        400: 'hsl(210,  27%,    93.0%)',
        500: 'hsl(210,  26%,    91.7%)',
        600: 'hsl(210,  23%,    90.4%)',
        700: 'hsl(210,  20%,    89.2%)',
        800: 'hsl(210,  18%,    88.0%)',
        900: 'hsl(210,  17%,    86.9%)'
      }
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
