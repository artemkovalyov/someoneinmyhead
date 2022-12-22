<script lang="ts">
  import type { PageData } from './$types';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  export let data: PageData;
  const image = data.images.get('/src/posts/emacs/xkb/dots.jpg');
</script>

<MainGrid>
  {#each Array.from(data.posts) as post}
    {#if post[1].metadata.published}
      <BlogCard metadata={post[1].metadata} {image} />
    {/if}
  {/each}
</MainGrid>
