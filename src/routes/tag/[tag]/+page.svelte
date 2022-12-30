<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import GridSection from '$lib/components/GridSection.svelte';
  export let data: PageData;
  const tag = $page.params.tag;
  const postsFilteredByTag = data.postsList.filter((post) => post.tags.includes(tag));
</script>

<h1 class="border-b-4 w-fit  2 border-secondary-container mb-7 text-4xl">Tag: {tag}</h1>
<GridSection>
  {#each postsFilteredByTag as post}
    <BlogCard {post} />
  {/each}
</GridSection>
