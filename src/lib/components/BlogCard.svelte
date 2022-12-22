<script lang="ts">
  import { siteConfig } from '$lib/site.config';
  import Pill from './Pill.svelte';
  import type { Metadata } from '$lib/posts';
  export let tagsPerCard = siteConfig.tagsPerCard;
  export let metadata: Metadata;
  export let image;
</script>

<article class="flex flex-col justify-between">
  <div class="flex flex-col">
    <a href={metadata.slug} class="w-full mb-7 mx-auto">
      <!-- <a data-sveltekit-reload href={metadata.slug} class="w-full mb-7 mx-auto"> -->
      {#if metadata.image === ''}
        <div class="w-full aspect-video bg-elevation-5" />
      {:else}
        <img
          class="max-w-full"
          src={image.default}
          alt={metadata.alt || 'Blog Post by: ' + metadata.author}
        />
      {/if}
    </a>
    <header class="flex flex-col mb-3">
      <div class="flex justify-between text-sm mb-2">
        <!-- TAGS -->
        <div class="flex gap-2">
          {#if metadata.tags}
            {#each metadata.tags.slice(0, tagsPerCard) as tag}
              <Pill>{tag}</Pill>
            {/each}
          {/if}
        </div>
        <!-- FEATURED -->
        <div class="flex gap-2">
          <span class="text-secondary py-1 px-2">Author: Artem Kovalov</span>
        </div>
      </div>
      <a href={metadata.slug}>
        <!-- <a data-sveltekit-reload href={metadata.slug}> -->
        <h2 class="text-3xl font-bold ">{metadata.title}</h2>
      </a>
    </header>
    <section class="text-xl mb-2">
      {metadata.excerpt}
    </section>
  </div>
  <footer class="flex justify-between text-sm text-secondary">
    <time datetime={new Date(metadata.publishedTime).toISOString()}
      >{new Date(metadata.publishedTime).toDateString().slice(4)}</time
    >
    <span> {Math.ceil(metadata.readingTime)} min read</span>
  </footer>
</article>
