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
    .filter((line, index) => {
      if (highlightBlock) {
        if (line.includes(highlightEndPattern)) {
          highlightBlock = false;
          linesRemoved += 1;
          return false;
        } else {
          linesToHighligh.push(index - linesRemoved);
        }
      } else if (line.includes(highlightStartPattern)) {
        highlightBlock = true;
        linesToHighligh.push(index - linesRemoved);
        linesRemoved += 1;
        return false;
      } else {
        if (line.includes(highlightNextLinePattern)) {
          linesToHighligh.push(index - linesRemoved);
          linesRemoved += 1;
          return false;
        }
      }
      if (diffAddBlock) {
        if (line.includes(diffAddEndPattern)) {
          diffAddBlock = false;
          linesRemoved += 1;
          return false;
        } else {
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

  if (meta) {
    console.log(meta);
  }

  const shikiHighlighter = await getHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['bash', 'css', 'js', 'ts', 'ansi', 'properties', 'xml']
  });

  let codeHtml = shikiHighlighter.codeToHtml(cleanCode, {
    lang,
    theme: 'github-dark',
    transformers: [
      {
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
