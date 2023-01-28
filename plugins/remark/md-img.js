/** @typedef {import('remark-directive')} */

import { visit } from 'unist-util-visit';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function remarkRelativeImageLink() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      // node.url = 'https://picsum.photos/1280/720';
      console.log(node);
    });
  };
}
