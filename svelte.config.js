import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';
import { mdsvexGlobalComponents } from './plugins/mdsvex/inject-global-imports-to-mdsvex.mjs';

const globalComponents = mdsvexGlobalComponents({
  componentsDir: `$lib/components`,
  componentsList: ['CodeBlock.svelte', 'Head.svelte']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    }),
    globalComponents,
    mdsvex(mdsvexConfig),
    importAssets()
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
