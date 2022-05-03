<script>
  import Header from '$lib/components/Header.svelte';
  import '$lib/main.css';
</script>

<Header />

<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  <slot />
</main>
