import { join, basename, extname } from 'path';

export const defaults = {
  extensions: ['.svelte.md', '.md', '.svx'],
  compnentsDir: `$lib`,
  componentsList: []
};
/**
 * Injects global imports into all your mdsvex files
 * Specify:
 * - the root dir (defaults to `src/lib`)
 * - the array list of components (with extension), like `['Component.svelte']`
 * - the valid extensions list as an array (defaults to `['.svelte.md', '.md', '.svx']`)
 *
 * If you want the component name to be different from the file name, you can specify an array
 * of arrays: `['Component.svelte', ['Another', 'AnotherComp.svelte'], 'ThirdComp.svelte']`
 *
 * @param {Object} options options described above
 * @returns a preprocessor suitable to plug into the `preprocess` key of the svelte config
 */
export const mdsvexGlobalComponents = (options = {}) => {
  const { extensions, componentsDir, componentsList } = { ...defaults, ...options };
  const extensionsRegex = new RegExp('(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');

  if (!componentsList || !componentsList.length || !Array.isArray(componentsList)) {
    throw new Error(
      `"Add at list one Svelte component to the componentsList. The "componentsList" option must be an array and contain at least one element`
    );
  }

  const preprocessor = {
    script(input) {
      const { content, filename, attributes, markup } = input;
      if (!filename.match(extensionsRegex)) {
        return { code: content };
      }
      const imports = componentsList
        .map((component) => {
          let name = '';
          if (Array.isArray(component)) {
            alias = entry[0];
            component = component[1];
          }
          const ext = extname(component);
          const path = join(componentsDir, component);
          name = name || basename(component, ext);
          const isComponentUsed = RegExp(String.raw`<${name}`).test(markup);
          console.log(isComponentUsed);
          return `\nimport ${name} from "${path}"`;
        })
        .join('\n');

      const hasModuleContext = /^<script context="module">/.test(markup);
      const isModulePass = attributes?.context === 'module';
      const isValidPass = (hasModuleContext && isModulePass) || !hasModuleContext;
      if (isValidPass) {
        return { code: `${imports}\n${content}` };
      }
      return { code: content };
    }
  };
  return preprocessor;
};
