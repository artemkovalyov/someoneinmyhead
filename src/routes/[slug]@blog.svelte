<script>
  import { blogStore } from '$lib/stores';

  const post = $blogStore.posts[0].content;
</script>

<svelte:component this={post} />
