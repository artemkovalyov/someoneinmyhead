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
      }[character])
  );
}

async function highlighter(code, lang, meta) {
  let linesToHighligh = [];
  const highlightNextLineRegEx = new RegExp(/highlight-next-line/);
  // const highlightNextLineRegEx = new RegExp(/highlight-start/);
  // const highlightNextLineRegEx = new RegExp(/highlight-end/);
  const inHL = false;
  code
    .trim()
    .split('\n')
    .map((line, index) => {
      if (highlightNextLineRegEx.test(line)) {
        linesToHighligh.push(index);
      }
      return line;
    });

  if (meta) {
    console.log(meta);
  }

  const shikiHighlighter = await getHighlighter({
    themes: ['github-light', 'github-dark']
  });

  const codeHtmlLight = shikiHighlighter.codeToHtml(code.trim(), {
    lang,
    theme: 'github-light'
  });
  let codeHtmlDark = shikiHighlighter.codeToHtml(code.trim(), {
    lang,
    theme: 'github-dark'
  });

  return `<CodeBlock code={\`${escapeHtml(code)}\`}>
${escapeSvelte(`${codeHtmlLight}${codeHtmlDark}`)}
</CodeBlock>`;
}

export default highlighter;
