import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import relativeImages from 'mdsvex-relative-images';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import remarkAdmonitions from './plugins/remark/sections.js';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [remarkParse, remarkDirective, remarkAdmonitions, relativeImages, remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
    [rehypeExternalLinks, { rel: ['nofollow'], target: ['_blanc'] }]
  ]
});

export default config;
