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
</style>
