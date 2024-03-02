import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkAdmonitions from './plugins/remark/sections.js';
import readingTime from './plugins/remark/reading-time.js';
import highlighter from './plugins/mdsvex/highliter.js';

const config = defineConfig({
  highlight: { highlighter },
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [readingTime],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
    [rehypeExternalLinks, { rel: ['nofollow'], target: ['_blanc'] }]
  ]
});

export default config;
