import { getHighlighter } from 'shiki';
import { escapeSvelte } from 'mdsvex';
import { v4 as uuidv4 } from 'uuid';
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

  return `<div class='code-block'>
    <button
class="copy-code-btn"
      data-clipboard-text="${escapeHtml(code)}"
    >
      <span class="material-icons-outlined copy">
        content_copy
      </span>
      <span class="material-icons-outlined ok">
        done
      </span>
    </button>
${escapeSvelte(`${codeHtmlLight}${codeHtmlDark}`)}
</div>`;
}

export default highlighter;
