import { visit } from 'unist-util-visit';
import getReadingTime from 'reading-time';

export default function readingTime(options = { wordsPerMinute: 200 }) {
  return (tree, file) => {
    let text = '';
    visit(tree, ['text', 'code'], (node) => {
      text += node.value;
    });

    const readingStats = getReadingTime(text, options);

    // mdsvex saves frontmatter to vFile.data.fm,
    // to update it and have it reflected in mdsvex module's metadata
    // you have to write any additional properties during reprocessing
    // directly there. Updating vFile's content is not reflected.

    file.data.fm = {
      ...file.data.fm,
      ...{ readingTime: readingStats.minutes, wordCount: readingStats.words }
    };

    // This will update frontmatter content in the vFile itself.
    // This however doesn't make it reflect in module's metadata

    // visit(tree, ['yaml', 'toml'], (node) => {
    //   node.value +=
    //     `\nreadingTime: ${readingStats.minutes}\n` + `wordsCount: ${readingStats.words}`;
    // });
  };
}
