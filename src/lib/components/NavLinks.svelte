<script lang="ts">
  import getConfig from '$lib/site.config';

  const { navbar, basePath } = getConfig();
</script>

<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  <div class="xs:text-sm sm:text-xl lg:flex-grow">
    {#each navbar as nav}
      {#if nav.href !== undefined}
        <a
          href={nav.href}
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          {nav.label}
        </a>
      {:else}
        <a
          href="{basePath}/{nav.path}"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          {nav.label}
        </a>
      {/if}
    {/each}
  </div>
</div>
