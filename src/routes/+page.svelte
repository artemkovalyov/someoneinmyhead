<script lang="ts">
  import type { PageData } from './$types';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  export let data: PageData;
  const image = data.images[0];
  console.log(data.images[0].path);
</script>

<MainGrid>
  {#each data.posts as post}
    {#if post.published}
      <BlogCard {post} {image} />
    {/if}
  {/each}
</MainGrid>
