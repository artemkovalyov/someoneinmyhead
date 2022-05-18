<script lang="ts">
  import getConfig from '$lib/site.config';

  const { navbar, basePath } = getConfig();
</script>

{#each navbar as nav}
  {#if nav.href !== undefined}
    <a href={nav.href} class="block sm:inline-block text-teal-200 hover:text-white mr-4">
      {nav.label}
    </a>
  {:else}
    <a
      href="{basePath}/{nav.path}"
      class="block sm:inline-block text-teal-200 hover:text-white mr-4"
    >
      {nav.label}
    </a>
  {/if}
{/each}
