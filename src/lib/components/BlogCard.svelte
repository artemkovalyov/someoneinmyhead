<script lang="ts">
  import { getImageByPath } from '$lib/images';
  import type { Post } from '$lib/posts';
  import { siteConfig } from '$lib/site.config';
  export let tagsPerCard = siteConfig.tagsPerCard;
  import Pill from './Pill.svelte';
  export let post: Post;
  const image =
    post.image?.charAt(0) == '.'
      ? // slightly abusing URL API to avoid writing own relative path calculation
        getImageByPath(new URL(post?.image, `file://dummy${post.dir}`).pathname).default
      : // leave the link "as is" because it is an external link
        post.image;
</script>

<article class="flex flex-col justify-between">
  <div class="flex flex-col">
    <a href="/{post.slug}" class="w-full mb-7 mx-auto">
      <!-- <a data-sveltekit-reload href={post.slug} class="w-full mb-7 mx-auto"> use this if you need a full page reload https://kit.svelte.dev/docs/link-options -->
      {#if post.image === ''}
        <div class="w-full aspect-video bg-elevation-5" />
      {:else}
        <img class="max-w-full" src={image} alt={post.alt || 'Blog Post by: ' + post.author} />
      {/if}
    </a>
    <header class="flex flex-col mb-3">
      <div class="flex justify-between text-sm mb-2">
        <!-- TAGS -->
        <div class="flex gap-2">
          {#if post.tags}
            {#each post.tags.slice(0, tagsPerCard) as tag}
              <a href="/tag/{tag}"><Pill text={tag} /></a>
            {/each}
          {/if}
        </div>
        <!-- FEATURED -->
        <div class="flex gap-2">
          <span class="text-secondary py-1 px-2">Author: Artem Kovalov</span>
        </div>
      </div>
      <a href="/{post.slug}">
        <!-- <a data-sveltekit-reload href={postMetadata.slug}> -->
        <h2 class="text-3xl font-bold">{post.title}</h2>
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
    <span> {Math.ceil(parseFloat(post.readingTime))} min read</span>
  </footer>
</article>
