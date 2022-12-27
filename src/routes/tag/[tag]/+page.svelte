<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  export let data: PageData;
  const tag = $page.params.tag;
  const postsFilteredByTag = data.postsList.filter((post) => post.tags.includes(tag));
</script>

<MainGrid>
  {#each postsFilteredByTag as post}
    <BlogCard {post} />
  {/each}
</MainGrid>
