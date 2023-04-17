import shiki from 'shiki';

const defaultTheme = 'github-dark';

function escapeHtml(code) {
  return code.replace(
    /[{}`]/g,
    (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character])
  );
}

async function highlighter(code, lang, meta) {
  const shikiHighlighter = await shiki.getHighlighter({
    // theme: defaultTheme
    // theme: customTheme
    // theme: `moonlight`,
    themes: ['github-light', 'github-dark']

    // paths: {
    //   themes: `${process.cwd()}/plugins/mdsvex`
    // }
  });

  const htmlLight = shikiHighlighter.codeToHtml(code, {
    lang,
    theme: 'github-light'
  });
  const htmlDark = shikiHighlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark'
  });

  return escapeHtml(htmlLight).concat(escapeHtml(htmlDark));
}

export default highlighter;
