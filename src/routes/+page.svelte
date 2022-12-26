<script lang="ts">
  import type { PageData } from './$types';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  export let data: PageData;
</script>

<MainGrid>
  {#each data.postsList as post}
    {#if post.published}
      <BlogCard {post} />
    {/if}
  {/each}
</MainGrid>
