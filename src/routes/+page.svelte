<script lang="ts">
  import type { PageData } from './$types';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import GridSection from '$lib/components/GridSection.svelte';
  export let data: PageData;
</script>

<GridSection>
  {#each data.postsList as post}
    <BlogCard {post} />
  {/each}
</GridSection>
