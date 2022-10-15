<script lang="ts">
  import Pill from './Pill.svelte';
  export let title = 'Very Nice Demo Title';
  export let image = 'https://placeimg.com/962/558/nature';
  export let alt = 'Imgage description';
  export let excerpt =
    'Some quick example text to build on the card title and make up the bulk of the card content. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla';
  export let link = 'https://someoneinmybed.com/';
  export let tags = ['My Tag 1', 'My Tag 2'];
</script>

<article class="flex flex-col">
  <a href={link} class="mb-7 mx-auto">
    <img class="block bg-elevation-1 max-w-full" src={image} {alt} />
  </a>
  <header class="flex flex-col mb-3">
    <div class="flex justify-between text-sm mb-2">
      <!-- TAGS -->
      <div class="flex gap-2">
        {#if tags.length > 0}
          {#each tags as tag}
            <Pill>{tag}</Pill>
          {/each}
        {/if}
      </div>
      <!-- FEATURED -->
      <div class="flex gap-2">
        <span class="text-secondary py-1 px-2">Author: Artem Kovalov</span>
      </div>
    </div>
    <a href={link}>
      <h2 class="text-3xl font-bold ">{title}</h2>
    </a>
  </header>
  <div class="text-xl mb-2">
    {excerpt}
  </div>
  <footer class="flex justify-between text-sm text-secondary">
    <time datetime="2021-03-18">Mar 18, 2021</time>
    <span>3 min read</span>
  </footer>
</article>
