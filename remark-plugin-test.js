import { read } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import readingTime from './plugins/remark/reading-time.js';

main();

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(readingTime)
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .use(() => (tree) => {
      console.dir(tree);
    })
    .process(await read('./src/posts/emacs/xkb/tweak-xkb-for-emacs-in-linux.md'));

  // console.log(String(file));
}
