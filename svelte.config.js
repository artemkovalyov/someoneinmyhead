import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { importAssets } from 'svelte-preprocess-import-assets';
import { mdsvexGlobalComponents } from './plugins/mdsvex/inject-global-imports-to-mdsvex.mjs';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import { toHtml } from 'hast-util-to-html';
import { toHast } from 'mdast-util-to-hast';

const mdExtenstions = ['.svelte.md', '.md', '.svx'];
const extensionsRegex = new RegExp(`(${mdExtenstions.join('|').replace(/\./g, '\\.')})$`, 'i');

const unifiedPreprocess = {
  markup: async ({ content, filename }) => {
    if (!filename.match(extensionsRegex)) {
      return { code: content };
    }
    const unifiedResult = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkFrontmatter, { type: 'yaml', marker: '-' })
      .use(() => {
        return (tree) => {
          visit(tree, 'containerDirective', (node) => {
            // change node's type from containerDirective to root for further serialization to HTML
            node.type = 'root';
            // render Admonition content from the node using unist utils
            const admonitionContent = toHtml(toHast(node, { allowDangerousHtml: true }), {
              allowDangerousHtml: true,
              allowDangerousCharachters: true
            });
            //change node's type to HTML to replace the containerDirective with it, all of this is such a hack to still benefit from mdsvex
            node.type = 'html';
            // Inject a svelte component with the content from the node
            node.value = `<Admonition type="${node.name}" title="${node.attributes.title}" id="${node.attributes.id}">${admonitionContent}</Admonition>`;
          });
        };
      })
      .use(remarkStringify)
      .process(content);
    // use this to debug a selected article from the blog that causes trouble with Admonitions
    // if (filename.includes('emacs')) console.log(unifiedResult.value);
    return {
      code: unifiedResult.value
    };
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    // inject certain components to every MD file to be considered by MDSvex when the component is rendered.
    mdsvexGlobalComponents({
      componentsDir: `$lib/components`,
      componentsList: ['CodeBlock.svelte', 'Head.svelte', 'Admonition.svelte']
    }),
    unifiedPreprocess,
    mdsvex(mdsvexConfig),
    sveltePreprocess({
      postcss: true
    }),
    // vitePreprocess(),
    importAssets() // imports static assets to accommodate static builds, should be after mdsvex, otherwise encoding of
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
