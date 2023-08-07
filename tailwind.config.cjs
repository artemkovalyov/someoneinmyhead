/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,mjs,svelte,ts,md,svx}',
    './plugins/**/*.{html,js,mjs,svelte,ts,md,svx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              'background-color': 'var(--md-sys-color-outline-variant)',
              padding: '0.2rem 0.5rem 0.1rem 0.5rem',
              fontWeight: 0
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            }
          }
        }
      },
      colors: {
        // 'gray': {
        //   5: '#1e1e1e',
        //   7: '#222222',
        //   8: '#242424',
        //   9: '#272727',
        //   11: '#2c2c2c',
        //   12: '#2e2e2e',
        //   14: '#333333',
        //   15: '#363636',
        //   16: '#383838'
        // },
        // Material design colors scheme
        // The tokns automatically change for Light and Dark scheme
        // Check /src/lib/styles
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'on-primary-container-high-contrast':
          'var(--md-sys-color-on-primary-container-high-contrast)',
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
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'on-inverse-surface': 'var(--md-sys-color-on-inverse-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        'on-inverse-primary': 'var(--md-sys-color-on-inverse-primary)',
        shadow: 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        'surface-tint-color': 'var(--md-sys-color-surface-tint-color)',
        elevation: {
          1: 'var(--md-sys-color-elevation1)',
          2: 'var(--md-sys-color-elevation2)',
          3: 'var(--md-sys-color-elevation3)',
          4: 'var(--md-sys-color-elevation4)',
          5: 'var(--md-sys-color-elevation5)',
          6: 'var(--md-sys-color-elevation6)',
          7: 'var(--md-sys-color-elevation7)'
        },

        // Tonal palette from the Material Design Theme
        'primary-palette': {
          /* primary */
          0: 'var(--md-ref-palette-primary0)', // --md-ref-palette-primary0: #000000;
          10: 'var(--md-ref-palette-primary10)', // --md-ref-palette-primary10: #301400;
          20: 'var(--md-ref-palette-primary20)', // --md-ref-palette-primary20: #502500;
          25: 'var(--md-ref-palette-primary25)', // --md-ref-palette-primary25: #602e00;
          30: 'var(--md-ref-palette-primary30)', // --md-ref-palette-primary30: #713700;
          35: 'var(--md-ref-palette-primary35)', // --md-ref-palette-primary35: #834000;
          40: 'var(--md-ref-palette-primary40)', // --md-ref-palette-primary40: #954a00;
          50: 'var(--md-ref-palette-primary50)', // --md-ref-palette-primary50: #ba5e00;
          60: 'var(--md-ref-palette-primary60)', // --md-ref-palette-primary60: #e17300;
          70: 'var(--md-ref-palette-primary70)', // --md-ref-palette-primary70: #ff8e2f;
          80: 'var(--md-ref-palette-primary80)', // --md-ref-palette-primary80: #ffb785;
          90: 'var(--md-ref-palette-primary90)', // --md-ref-palette-primary90: #ffdcc6;
          95: 'var(--md-ref-palette-primary95)', // --md-ref-palette-primary95: #ffede4;
          98: 'var(--md-ref-palette-primary98)', // --md-ref-palette-primary98: #fff8f5;
          99: 'var(--md-ref-palette-primary99)', // --md-ref-palette-primary99: #fffbff;
          100: 'var(--md-ref-palette-primary100)' // --md-ref-palette-primary100: #ffffff;
        },
        'secondary-palette': {
          /* secondary */
          0: 'var(--md-ref-palette-secondary0)', // --md-ref-palette-secondary0: #000000;
          10: 'var(--md-ref-palette-secondary10)', // --md-ref-palette-secondary10: #001e2f;
          20: 'var(--md-ref-palette-secondary20)', // --md-ref-palette-secondary20: #00344d;
          25: 'var(--md-ref-palette-secondary25)', // --md-ref-palette-secondary25: #00405d;
          30: 'var(--md-ref-palette-secondary30)', // --md-ref-palette-secondary30: #004c6e;
          35: 'var(--md-ref-palette-secondary35)', // --md-ref-palette-secondary35: #00587f;
          40: 'var(--md-ref-palette-secondary40)', // --md-ref-palette-secondary40: #006591;
          50: 'var(--md-ref-palette-secondary50)', // --md-ref-palette-secondary50: #007fb5;
          60: 'var(--md-ref-palette-secondary60)', // --md-ref-palette-secondary60: #009adb;
          70: 'var(--md-ref-palette-secondary70)', // --md-ref-palette-secondary70: #1db6ff;
          80: 'var(--md-ref-palette-secondary80)', // --md-ref-palette-secondary80: #89ceff;
          90: 'var(--md-ref-palette-secondary90)', // --md-ref-palette-secondary90: #c9e6ff;
          95: 'var(--md-ref-palette-secondary95)', // --md-ref-palette-secondary95: #e5f2ff;
          98: 'var(--md-ref-palette-secondary98)', // --md-ref-palette-secondary98: #f6faff;
          99: 'var(--md-ref-palette-secondary99)', // --md-ref-palette-secondary99: #fcfcff;
          100: 'var(--md-ref-palette-secondary100)' // --md-ref-palette-secondary100: #ffffff;
        },
        'tertiary-palette': {
          /* tertiary */
          0: 'var(--md-ref-palette-tertiary0)', // --md-ref-palette-tertiary0:  #000000;
          10: 'var(--md-ref-palette-tertiary10)', // --md-ref-palette-tertiary10: #002115;
          20: 'var(--md-ref-palette-tertiary20)', // --md-ref-palette-tertiary20: #003827;
          25: 'var(--md-ref-palette-tertiary25)', // --md-ref-palette-tertiary25: #004530;
          30: 'var(--md-ref-palette-tertiary30)', // --md-ref-palette-tertiary30: #005139;
          35: 'var(--md-ref-palette-tertiary35)', // --md-ref-palette-tertiary35: #005e43;
          40: 'var(--md-ref-palette-tertiary40)', // --md-ref-palette-tertiary40: #006c4d;
          50: 'var(--md-ref-palette-tertiary50)', // --md-ref-palette-tertiary50: #008862;
          60: 'var(--md-ref-palette-tertiary60)', // --md-ref-palette-tertiary60: #27a37a;
          70: 'var(--md-ref-palette-tertiary70)', // --md-ref-palette-tertiary70: #4bbf93;
          80: 'var(--md-ref-palette-tertiary80)', // --md-ref-palette-tertiary80: #69dbad;
          90: 'var(--md-ref-palette-tertiary90)', // --md-ref-palette-tertiary90: #86f8c8;
          95: 'var(--md-ref-palette-tertiary95)', // --md-ref-palette-tertiary95: #bdffdf;
          98: 'var(--md-ref-palette-tertiary98)', // --md-ref-palette-tertiary98: #e7fff1;
          99: 'var(--md-ref-palette-tertiary99)', // --md-ref-palette-tertiary99: #f4fff7;
          100: 'var(--md-ref-palette-tertiary100)' // --md-ref-palette-tertiary100: #ffffff;
        },
        'neutral-palette': {
          /* neutral */
          0: 'var(--md-ref-palette-neutral0)', // --md-ref-palette-neutral0 : #000000;
          10: 'var(--md-ref-palette-neutral10)', // --md-ref-palette-neutral10: #201a17;
          20: 'var(--md-ref-palette-neutral20)', // --md-ref-palette-neutral20: #362f2b;
          25: 'var(--md-ref-palette-neutral25)', // --md-ref-palette-neutral25: #413a36;
          30: 'var(--md-ref-palette-neutral30)', // --md-ref-palette-neutral30: #4d4541;
          35: 'var(--md-ref-palette-neutral35)', // --md-ref-palette-neutral35: #59514d;
          40: 'var(--md-ref-palette-neutral40)', // --md-ref-palette-neutral40: #655d58;
          50: 'var(--md-ref-palette-neutral50)', // --md-ref-palette-neutral50: #7e7570;
          60: 'var(--md-ref-palette-neutral60)', // --md-ref-palette-neutral60: #998f8a;
          70: 'var(--md-ref-palette-neutral70)', // --md-ref-palette-neutral70: #b4a9a4;
          80: 'var(--md-ref-palette-neutral80)', // --md-ref-palette-neutral80: #d0c4bf;
          90: 'var(--md-ref-palette-neutral90)', // --md-ref-palette-neutral90: #ece0da;
          95: 'var(--md-ref-palette-neutral95)', // --md-ref-palette-neutral95: #fbeee8;
          98: 'var(--md-ref-palette-neutral98)', // --md-ref-palette-neutral98: #fff8f5;
          99: 'var(--md-ref-palette-neutral99)', // --md-ref-palette-neutral99: #fffbff;
          100: 'var(--md-ref-palette-neutral100)' // --md-ref-palette-neutral100: #ffffff;
        },
        'neutral-variant-palette': {
          /* neutral-variant */
          0: 'var(--md-ref-palette-neutral-variant0)', // --md-ref-palette-neutral-variant0: #000000;
          10: 'var(--md-ref-palette-neutral-variant10)', // --md-ref-palette-neutral-variant10: #241912;
          20: 'var(--md-ref-palette-neutral-variant20)', // --md-ref-palette-neutral-variant20: #3a2e26;
          25: 'var(--md-ref-palette-neutral-variant25)', // --md-ref-palette-neutral-variant25: #463931;
          30: 'var(--md-ref-palette-neutral-variant30)', // --md-ref-palette-neutral-variant30: #52443b;
          35: 'var(--md-ref-palette-neutral-variant35)', // --md-ref-palette-neutral-variant35: #5e5047;
          40: 'var(--md-ref-palette-neutral-variant40)', // --md-ref-palette-neutral-variant40: #6a5b52;
          50: 'var(--md-ref-palette-neutral-variant50)', // --md-ref-palette-neutral-variant50: #84746a;
          60: 'var(--md-ref-palette-neutral-variant60)', // --md-ref-palette-neutral-variant60: #9f8d83;
          70: 'var(--md-ref-palette-neutral-variant70)', // --md-ref-palette-neutral-variant70: #baa89d;
          80: 'var(--md-ref-palette-neutral-variant80)', // --md-ref-palette-neutral-variant80: #d7c3b7;
          90: 'var(--md-ref-palette-neutral-variant90)', // --md-ref-palette-neutral-variant90: #f3ded3;
          95: 'var(--md-ref-palette-neutral-variant95)', // --md-ref-palette-neutral-variant95: #ffede4;
          98: 'var(--md-ref-palette-neutral-variant98)', // --md-ref-palette-neutral-variant98: #fff8f5;
          99: 'var(--md-ref-palette-neutral-variant99)', // --md-ref-palette-neutral-variant99: #fffbff;
          100: 'var(--md-ref-palette-neutral-variant100)' // --md-ref-palette-neutral-variant100: #ffffff;
        },
        'neutral-palette': {
          /* error */
          0: 'var(--md-ref-palette-error0)', // --md-ref-palette-error0: #000000;
          10: 'var(--md-ref-palette-error10)', // --md-ref-palette-error10: #410002;
          20: 'var(--md-ref-palette-error20)', // --md-ref-palette-error20: #690005;
          25: 'var(--md-ref-palette-error25)', // --md-ref-palette-error25: #7e0007;
          30: 'var(--md-ref-palette-error30)', // --md-ref-palette-error30: #93000a;
          35: 'var(--md-ref-palette-error35)', // --md-ref-palette-error35: #a80710;
          40: 'var(--md-ref-palette-error40)', // --md-ref-palette-error40: #ba1a1a;
          50: 'var(--md-ref-palette-error50)', // --md-ref-palette-error50: #de3730;
          60: 'var(--md-ref-palette-error60)', // --md-ref-palette-error60: #ff5449;
          70: 'var(--md-ref-palette-error70)', // --md-ref-palette-error70: #ff897d;
          80: 'var(--md-ref-palette-error80)', // --md-ref-palette-error80: #ffb4ab;
          90: 'var(--md-ref-palette-error90)', // --md-ref-palette-error90: #ffdad6;
          95: 'var(--md-ref-palette-error95)', // --md-ref-palette-error95: #ffedea;
          98: 'var(--md-ref-palette-error98)', // --md-ref-palette-error98: #fff8f7;
          99: 'var(--md-ref-palette-error99)', // --md-ref-palette-error99: #fffbff;
          100: 'var(--md-ref-palette-error100)' // --md-ref-palette-error100: #ffffff;
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
