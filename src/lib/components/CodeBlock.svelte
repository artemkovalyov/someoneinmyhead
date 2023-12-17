<!-- <svelte:options tag="code-block" /> -->

<script lang="ts">
  import copy from 'copy-text-to-clipboard';
  export let copied: boolean;
  export let code: string;

  const handleCopy = () => {
    copy(code);
    copied = true;
    window.setTimeout(() => (copied = !copied), 1000);
  };
</script>

<div class="code-block">
  <button class="copy-code-btn" on:click={handleCopy}>
    <span class="material-icons-outlined copy" class:copied> content_copy </span>
    <span class="material-icons-outlined ok" class:copied> done </span>
  </button>
  <slot />
</div>

<style>
  .code-block {
    @apply relative border-0;
  }
  .copy-code-btn .material-icons-outlined.copy {
    @apply p-2 text-outline border border-elevation-3 hover:border-elevation-7 col-start-[1] row-start-[1] hover:bg-elevation-3 transition-all;
  }

  .copy-code-btn .material-icons-outlined.ok {
    @apply p-2 text-green-700 border border-green-700 col-start-[1] row-start-[1] hover:bg-elevation-3 opacity-0 scale-[30%] transition-all;
  }

  .copy-code-btn .material-icons-outlined.ok.copied {
    @apply border border-green-700 bg-elevation-3 scale-100 opacity-100;
  }

  .copy-code-btn .material-icons-outlined.copy.copied {
    @apply scale-[30%] opacity-0;
  }

  .copy-code-btn {
    @apply absolute top-3 right-3 leading-none grid;
  }

  /* Shiki highlighted code-block configuration */

  /* reset counter for every new code block */
  pre.shiki {
    counter-reset: linenumber;
  }

  /* makes empty spans take the line in case there's not code content there */
  /* it is overridden by line number or diff indicators */
  .shiki span.line:before {
    content: '\200b';
  }
  /* increment the counter and add a number to a line */
  .shiki span.line:before {
    counter-increment: linenumber; /* increment the counter by 1 */
    content: counter(linenumber); /* add current counter value as text */
    @apply w-7 mr-3 inline-flex text-right text-secondary-palette-60 border-r-[0.1rem] border-secondary-palette-60;
  }
  /* override line number with diff indicator for adding */
  .shiki span.plus:before {
    content: '\ff0b'; /* add current counter value as text */
    @apply text-green-500 font-extrabold;
  }

  /* override line number with diff  indicator for removing*/
  .shiki span.minus:before {
    content: '\2014'; /* add current counter value as text */
    @apply text-red-400 font-extrabold;
  }

  .shiki {
    @apply !bg-elevation-1 !m-0 px-4;
  }

  .shiki code {
    @apply flex flex-col;
  }

  .shiki .line.plus {
    @apply -mx-8 px-8;
    background: rgba(72, 126, 2, 0.3);
  }
  .shiki .line.minus {
    @apply -mx-8 px-8;
    background: rgba(136, 0, 0, 0.5);
  }

  .shiki .line.highlight {
    @apply -mx-8 px-8 bg-elevation-3;
  }

  .light .shiki code {
    @apply invert-[.97] hue-rotate-180
  /* filter: invert(97%) hue-rotate(180deg); */;
  }
</style>
