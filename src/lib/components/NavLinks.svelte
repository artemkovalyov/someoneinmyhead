<script lang="ts">
  import getConfig from '$lib/site.config';
  const { navbar, basePath } = getConfig();
  export let path: string;

  let currentPage = 0;
</script>

{#each navbar as nav, id}
  {#if nav.href !== undefined}
    <a
      href={nav.href}
      class:current={false}
      class="mt-1 pb-1 lg:text-2xl relative before:border-primary-light dark:text-emphasis-high before:absolute before:content-[''] before:border-b-2 before:w-0 before:h-0 before:bottom-0 before:left-0 hover:before:w-full hover:before:ease-out hover:before:duration-500 hover:before:transition-all current"
    >
      {nav.label}
    </a>
  {:else}
    <a
      href="{basePath}/{nav.path}"
      class:current={true}
      class="mt-1 pb-1 lg:text-2xl relative before:border-primary-light dark:text-emphasis-high before:absolute before:content-[''] before:border-b-2 before:w-0 before:h-0 before:bottom-0 before:left-0 hover:before:w-full hover:before:ease-out hover:before:duration-500 hover:before:transition-all current"
    >
      {nav.label}
    </a>
  {/if}
{/each}

<style lang="css">
  .current {
    @apply before:w-full;
  }
</style>
