<script>
  import '$lib/main.css';
  import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  <slot />
</main>
