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
import highlighter from './plugins/mdsvex/highliter.mjs';

const shikiHighlightingOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  // Or your own JSON theme
  // theme: JSON.parse(fs.readFileSync(require.resolve('./themes/dark.json'), 'utf-8')),

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  }
};

const config = defineConfig({
  highlight: { highlighter },
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
