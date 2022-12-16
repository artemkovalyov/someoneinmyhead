import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      // pages: 'build',
      // assets: 'build',
      // fallback: null, //'200.html',
      // entries: ['/abc', '/arr'],
      // precompress: true
      // strict: true
    })
  }
};

export default config;
