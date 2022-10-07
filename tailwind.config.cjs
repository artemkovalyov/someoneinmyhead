/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'elevation-gray': {
          5: '#1e1e1e',
          7: '#222222',
          8: '#242424',
          9: '#272727',
          11: '#2c2c2c',
          12: '#2e2e2e',
          14: '#333333',
          15: '#363636',
          16: '#383838'
        },
        primary: {
          core: '#fb8c00',
          light: '#ffbd45',
          dark: '#c25e00'
        },
        secondary: {
          core: '#aed581',
          light: '#e1ffb1',
          dark: '#7da453'
        },
        emphasis: {
          high: '#e1e1e1',
          medium: '#a6a6a6',
          disabled: '#757575'
        },
        error: '#cf6679',
        art: 'var(--md-sys-color-error)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
};
