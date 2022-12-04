import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkAdmonitions from './plugins/remark/sections.js';
import readingTime from './plugins/remark/reading-time.js';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [
    remarkParse,
    readingTime,
    remarkStringify,
    remarkFrontmatter,
    remarkDirective,
    remarkAdmonitions,
    remarkGfm
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
    [rehypeExternalLinks, { rel: ['nofollow'], target: ['_blanc'] }]
  ]
});

export default config;
