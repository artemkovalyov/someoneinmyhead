<script>
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';

  import { getPostsSortedByDate } from '$lib/posts';
</script>

<MainGrid>
  {#each getPostsSortedByDate() as Post}
    <BlogCard />
  {/each}
</MainGrid>
