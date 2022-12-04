<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';
  export let data;
  // console.log(data);
</script>

<MainGrid>
  {#each data.posts as post}
    {#if post.published}
      <BlogCard {post} />
    {/if}
  {/each}
</MainGrid>
