import { getHighlighter } from 'shiki';
import { escapeSvelte } from 'mdsvex';

// function escapeHtml(code) {
//   return code.replace(
//     /[{}`"<>&']/g,
//     (character) =>
//       ({
//         '{': '&lbrace;',
//         '}': '&rbrace;',
//         '`': '&grave;',
//         '"': '&quot;',
//         '>': '&gt',
//         '<': '&lt',
//         '&': '&amp',
//         "'": '&#39;'
//       }[character])
//   );
// }

function escapeHtml(code) {
  return code.replace(
    /[{}`"]/g,
    (character) =>
      ({
        '{': '&lbrace;',
        '}': '&rbrace;',
        '`': '&grave;',
        '"': '&quot;'
      })[character]
  );
}

async function highlighter(code, lang, meta) {
  const highlightNextLinePattern = '//~~';
  const highlightStartPattern = '//>~~';
  const highlightEndPattern = '//<~~';
  const diffAddStartPattern = '//>++';
  const diffAddEndPattern = '//<++';
  const diffRemoveStartPattern = '//>--';
  const diffRemoveEndPattern = '//<--';
  let linesToHighligh = [];
  let linesToDiffAdd = [];
  let linesToDiffRemove = [];
  let linesRemoved = -1;
  let highlightBlock = false;
  let diffAddBlock = false;
  let diffRemoveBlock = false;
  const cleanCode = code
    .trim()
    .split('\n')
    // filter out special markup for highlighting and collect indices of the lines to highlight
    .filter((line, index) => {
      // are we in highlighting block?
      if (highlightBlock) {
        // have we reached the end of the highlighting block?
        if (line.includes(highlightEndPattern)) {
          highlightBlock = false;
          linesRemoved += 1;
          return false; // skip this line from results
        } else {
          // we found a line to highlight in the highlight block and push its index adjusted for the lines removed
          linesToHighligh.push(index - linesRemoved);
        }
        // have we found markup to start highlight block?
      } else if (line.includes(highlightStartPattern)) {
        highlightBlock = true;
        linesToHighligh.push(index - linesRemoved); // adjust the index for the removed markup line
        linesRemoved += 1;
        return false; // filter out this line
      } else {
        // have we found a single line highlight markup?
        if (line.includes(highlightNextLinePattern)) {
          linesToHighligh.push(index - linesRemoved); // adjust index for markup line removal
          linesRemoved += 1;
          return false; // filter out this line
        }
      }
      if (diffAddBlock) {
        // have we found an end of the diff highlight markup?
        if (line.includes(diffAddEndPattern)) {
          diffAddBlock = false;
          linesRemoved += 1;
          return false; // filter out this line
        } else {
          // we found a line to highlight in the diff block and push its index adjusted for the lines removed
          linesToDiffAdd.push(index - linesRemoved);
        }
      } else if (line.includes(diffAddStartPattern)) {
        diffAddBlock = true;
        linesRemoved += 1;
        return false;
      }
      if (diffRemoveBlock) {
        if (line.includes(diffRemoveEndPattern)) {
          diffRemoveBlock = false;
          linesRemoved += 1;
          return false;
        } else {
          linesToDiffRemove.push(index - linesRemoved);
        }
      } else if (line.includes(diffRemoveStartPattern)) {
        diffRemoveBlock = true;
        linesRemoved += 1;
        return false;
      }
      return true;
    })
    .join('\n');

  // here we can start using meta in case we want ot benefit from it
  if (meta) {
    // console.log(meta);
  }

  const shikiHighlighter = await getHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['bash', 'css', 'js', 'ts', 'ansi', 'properties', 'xml']
  });

  let codeHtml = shikiHighlighter.codeToHtml(cleanCode, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    },
    transformers: [
      {
        //add classes to the lines to ensure plain highlighting and diffing
        line(node, line) {
          if (linesToHighligh.includes(line)) this.addClassToHast(node, 'highlight');
          if (linesToDiffAdd.includes(line)) this.addClassToHast(node, 'plus');
          if (linesToDiffRemove.includes(line)) this.addClassToHast(node, 'minus');
        }
      }
    ]

    // linesToHighligh
    //   .map((line) => ({ line: line, classes: ['highlight'] }))
    //   .concat(
    //     linesToDiffAdd
    //       .map((line) => ({ line: line, classes: ['plus'] }))
    //       .concat(linesToDiffRemove.map((line) => ({ line: line, classes: ['minus'] })))
    //   )
  });

  return `<CodeBlock code={\`${escapeHtml(code)}\`}>
${escapeSvelte(`${codeHtml}`)}
</CodeBlock>`;
}

export default highlighter;
