import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';
import { mdsvexGlobalComponents } from './plugins/mdsvex/inject-global-imports-to-mdsvex.mjs';
import test from './plugins/mdsvex/test.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    // inject certain components to every MD file to be considered by MDSvex when the component is rendered.
    mdsvexGlobalComponents({
      componentsDir: `$lib/components`,
      componentsList: ['CodeBlock.svelte', 'Head.svelte']
    }),
    // test, // a test preprocessor to check details of the build
    sveltePreprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig),
    importAssets() // imports static assets to accommodate static builds, should be after mdsvex, otherwise encoding of
  ],
  // vitePlugin: {
  // prebundleSvelteLibraries: false
  // },

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
