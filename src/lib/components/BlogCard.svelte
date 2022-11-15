<script lang="ts">
  import type { Post } from '$lib/posts';
  import { siteConfig } from '$lib/site.config';
  import Pill from './Pill.svelte';

  export let tagsPerCard = siteConfig.tagsPerCard;
  export let post: Post;
  const imgUrl = new URL('../../posts/keyboard.jpg', import.meta.url).href;
</script>

<article class="flex flex-col justify-between">
  <div class="flex flex-col">
    <a href={post.slug} class="w-full mb-7 mx-auto">
      {#if post.image === ''}
        <div class="w-full aspect-video bg-elevation-5" />
      {:else}
        <!-- <img class="max-w-full" src={post.image} alt={post.alt || 'Blog Post by: ' + post.author} /> -->
        <img
          class="max-w-full"
          src={siteConfig.rootDir + '/' + post.dir + post.image}
          alt={post.alt || 'Blog Post by: ' + post.author}
        />
      {/if}
    </a>
    <header class="flex flex-col mb-3">
      <div class="flex justify-between text-sm mb-2">
        <!-- TAGS -->
        <div class="flex gap-2">
          {#if post.tags}
            {#each post.tags.slice(0, tagsPerCard) as tag}
              <Pill>{tag}</Pill>
            {/each}
          {/if}
        </div>
        <!-- FEATURED -->
        <div class="flex gap-2">
          <span class="text-secondary py-1 px-2">Author: Artem Kovalov</span>
        </div>
      </div>
      <a data-sveltekit-reload href={post.slug}>
        <h2 class="text-3xl font-bold ">{post.title}</h2>
      </a>
    </header>
    <section class="text-xl mb-2">
      {post.excerpt}
    </section>
  </div>
  <footer class="flex justify-between text-sm text-secondary">
    <time datetime={new Date(post.publishedTime).toISOString()}
      >{new Date(post.publishedTime).toDateString().slice(4)}</time
    >
    <span> {post.readingTime} min read</span>
  </footer>
</article>
