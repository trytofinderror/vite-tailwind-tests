const plugin = require('tailwindcss/plugin')
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'xs': '0 0 1px 0 var(--tw-shadow-color)',
      'sm': '0 0 2px 0 var(--tw-shadow-color)',
      'md': '0 0 4px 0 var(--tw-shadow-color)',
      'lg': '0 0 8px 0 var(--tw-shadow-color)',
      'xl': '0 0 12px 0 var(--tw-shadow-color)',
      'xs-lt': '1px 1px 1px 0 var(--tw-shadow-color)',
      'sm-lt': '1px 1px 2px 0 var(--tw-shadow-color)',
      'md-lt': '2px 2px 4px 0 var(--tw-shadow-color)',
      'lg-lt': '4px 4px 8px 0 var(--tw-shadow-color)',
      'xl-lt': '6px 6px 12px 0 var(--tw-shadow-color)',
      'xs-rt': '-1px 1px 1px 0 var(--tw-shadow-color)',
      'sm-rt': '-1px 1px 2px 0 var(--tw-shadow-color)',
      'md-rt': '-2px 2px 4px 0 var(--tw-shadow-color)',
      'lg-rt': '-4px 4px 8px 0 var(--tw-shadow-color)',
      'xl-rt': '-6px 6px 12px 0 var(--tw-shadow-color)'
    },
    textShadow: {
      'xs': '0 0 1px var(--tw-shadow-color)',
      'sm': '0 0 2px var(--tw-shadow-color)',
      'md': '0 0 4px var(--tw-shadow-color)',
      'lg': '0 0 8px var(--tw-shadow-color)',
      'xl': '0 0 12px var(--tw-shadow-color)',
      'xs-lt': '1px 1px 1px var(--tw-shadow-color)',
      'sm-lt': '1px 1px 2px var(--tw-shadow-color)',
      'md-lt': '2px 2px 4px var(--tw-shadow-color)',
      'lg-lt': '4px 4px 8px var(--tw-shadow-color)',
      'xl-lt': '6px 6px 12px var(--tw-shadow-color)',
      'xs-rt': '-1px 1px 1px var(--tw-shadow-color)',
      'sm-rt': '-1px 1px 2px var(--tw-shadow-color)',
      'md-rt': '-2px 2px 4px var(--tw-shadow-color)',
      'lg-rt': '-4px 4px 8px var(--tw-shadow-color)',
      'xl-rt': '-6px 6px 12px var(--tw-shadow-color)'
    },
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'header': ['Tektur', 'sans-serif']
    },
    colors: {
      'eapo-blue-dark': '#1820DD',
      'eapo-blue-light': '#3C2FD6',
      'eapo-blue-crystal': '#65B1B6',
      'eapo-blue-extralight': '#D4D2ED',
      'eapo-yellow': '#E4A11E',
      'eapo-yellow-light': '#FED84C',
      'eapo-red': '#DD3232',
      'eapo-green': '#357138',
      'eapo-grey-border-light': '#C3C2D2',
      'eapo-grey-border': '#838383',
      'eapo-grey-dark': '#292929',
      'eapo-grey-light': '#BEBEBE',
      'eapo-grey': '#F2F2F2',
      'eapo-grey-extralight': '#FDFDFF',
      'eapo-black': '#000000',
      'eapo-white': '#FFFFFF'
    },
    container: {
      center: true,
      screens: {
        'sm':  '576px',
        'md':  '640px',
        'lg':  '990px',
        'xl':  '1200px',
        '2xl': '1440px',
      },
    },
    screens: {
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      '5xs': '0.25rem',
      '4xs': '0.3rem',
      '3xs': '0.4rem',
      '2xs': '0.5rem',
      'xs':'0.75rem',
      'sm':'0.875rem',
      'base':'1rem',
      'lg':'1.125rem',
      'xl':'1.25rem',
      '2xl':'1.5rem',
      '3xl':'1.875rem',
      '4xl':'2.25rem',
      '5xl':'3rem',
      '6xl':'3.75rem',
      '7xl':'4.5rem',
      '8xl':'6rem',
      '9xl':'8rem',
      'md': '.9375rem'
    },
    lineHeight: {
      '0': 0,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'box-shadow': (value) => ({
              boxShadow: value,
            }),
          },
          { values: theme('boxShadow') }
      )
    }),
  ],
}