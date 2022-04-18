<script>
  import { page } from '$app/stores';
  import Head from '$lib/components/Head.svelte';
  import '$lib/main.css';

  const title = $page.url.pathname;
  console.log(title);
</script>

<Head />

<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  <slot />
</main>
