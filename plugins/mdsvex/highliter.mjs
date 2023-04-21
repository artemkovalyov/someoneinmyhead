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
  const shikiHighlighter = await getHighlighter({
    themes: ['github-light', 'github-dark']
  });

  const codeHtmlLight = shikiHighlighter.codeToHtml(code.trim(), {
    lang,
    theme: 'github-light'
  });
  const codeHtmlDark = shikiHighlighter.codeToHtml(code.trim(), {
    lang,
    theme: 'github-dark'
  });

  return `<CodeBlock code={\`${escapeHtml(code)}\`}>
${escapeSvelte(`${codeHtmlLight}${codeHtmlDark}`)}
</CodeBlock>`;
}

export default highlighter;
