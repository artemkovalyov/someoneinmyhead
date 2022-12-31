<script lang="ts">
  import { page } from '$app/stores';
  export let text = '';
</script>

{#if $page.params.tag === text}
  <span
    class="pt-1 pb-1.5 px-2 bg-primary text-on-primary border border-outline rounded-lg hover:bg-primary-palette-70 transition-all duration-500 ease-in-out "
  >
    {text}
  </span>
{:else}
  <span
    class="pt-1 pb-1.5 px-2 bg-surface-variant text-on-surface-variant border border-outline rounded-lg hover:bg-elevation-5 transition-all duration-500 ease-in-out"
  >
    {text}
  </span>
{/if}
