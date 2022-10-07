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

        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        error: 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        background: 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        surface: 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        outline: 'var(--md-sys-color-outline)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'on-inverse-surface': 'var(--md-sys-color-on-inverse-surface)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'on-inverse-surface': 'var(--md-sys-color-on-inverse-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        'on-inverse-primary': 'var(--md-sys-color-on-inverse-primary)',
        shadow: 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        'surface-tint-color': 'var(--md-sys-color-surface-tint-color)'

        // primary: {
        //   core: '#fb8c00',
        //   light: '#ffbd45',
        //   dark: '#c25e00'
        // },
        // secondary: {
        //   core: '#aed581',
        //   light: '#e1ffb1',
        //   dark: '#7da453'
        // },
        // emphasis: {
        //   high: '#e1e1e1',
        //   medium: '#a6a6a6',
        //   disabled: '#757575'
        // }
        // error: '#cf6679'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
};
