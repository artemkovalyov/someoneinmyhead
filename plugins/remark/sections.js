/** @typedef {import('remark-directive')} */

import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

/**
 * This plugin tanslates Markdown extension like below into HTML.
 *
 * :::some-name{.someclass title="your-title" #your-id element=html-element}
 *
 * Markdown content of any kind
 *
 * :::
 *
 *  <html-element class="someclass" title="your-title" id="your-id" element="html-element">
 *     <div class="someclass">your-title</div>
 *      <p>Markdown content of any kind</p>
 *  </html-element>
 *
 *
 */

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function remarkAdmonitions() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      // if (node.name !== 'note') return;
      const data = node.data || (node.data = {});
      const hast = h(node.attributes.element || 'div', node.attributes);
      const title = node.attributes.title || node.name;
      data.hName = hast.tagName;
      data.hProperties = hast.properties;
      node.children.unshift({
        type: 'AdmonitionTitle',
        children: [{ type: 'text', value: `${title}` }],
        data: { hName: 'div', hProperties: { className: `admonition-title` } }
      });
    });
  };
}
