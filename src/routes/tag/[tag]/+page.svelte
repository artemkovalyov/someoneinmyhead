<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import GridSection from '$lib/components/GridSection.svelte';
  export let data: PageData;
  const postsFilteredByTag = data.postsList.filter((post) => post.tags.includes($page.params.tag));
</script>

<h1 class="w-fit 2 mb-7 text-4xl font-light text-primary">
  <span class="text-secondary font-bold">Tag:</span>
  {$page.params.tag}
</h1>
<GridSection>
  {#each postsFilteredByTag as post}
    <BlogCard {post} />
  {/each}
</GridSection>
