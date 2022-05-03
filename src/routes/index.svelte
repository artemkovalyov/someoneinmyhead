<script>
  import { getPosts } from '$lib/posts';
</script>

<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  {#each getPosts() as post}
    <article>
      <svelte:component this={post.content} />
    </article>
  {/each}
</main>
