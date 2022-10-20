<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  import { getPostsSortedByDate } from '$lib/posts';
</script>

<MainGrid>
  {#each getPostsSortedByDate() as post}
    {#if post.published}
      <BlogCard {post} />
    {/if}
  {/each}
</MainGrid>
