import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    autoImport({
      components: ['./src/lib/components/']
    }),
    sveltekit()
  ]
};

export default config;
