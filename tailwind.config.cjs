module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
