<script>
  import { blogStore } from '$lib/stores';
</script>

<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  {#each $blogStore.posts as post}
    <article>
      <svelte:component this={post.content} />
    </article>
  {/each}
</main>
