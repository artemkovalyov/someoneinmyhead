/** @typedef {import('remark-directive')} */

import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { u } from 'unist-builder';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'note') return;
        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';
        data.hName = 'section';
        data.hProperties = h(tagName, node.attributes).properties;
        node.children.unshift({
          type: 'art',
          children: [{ type: 'text', value: 'abcalsdjflsjkdflas' }],
          data: { hName: 'div', hProperties: { className: 'art' } }
        });
        console.log(node.children);
      }
    });
  };
}
