<script lang="ts">
  import { page } from '$app/stores';
  export let text = '';
</script>

{#if $page.params.tag === text}
  <span
    class="pt-1 pb-1.5 px-2 bg-secondary text-on-secondary rounded-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-500 ease-in-out "
  >
    {text}
  </span>
{:else}
  <span
    class="pt-1 pb-1.5 px-2 bg-elevation-3 text-on-surface rounded-lg hover:bg-outline-variant transition-all duration-500 ease-in-out"
  >
    {text}
  </span>
{/if}
