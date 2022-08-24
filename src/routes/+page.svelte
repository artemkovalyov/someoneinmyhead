<script>
  import Card from '$lib/components/Card.svelte';

  import { getPostsSortedByDate } from '$lib/posts';
</script>

<main class="mx-4">
  <h1 class="text-2xl font-bold dark:text-primary-core">Someone In My Head</h1>
  <h1 class="text-2xl font-bold dark:text-primary-light">Someone In My Head</h1>
  <h1 class="text-2xl font-bold dark:text-primary-dark">Someone In My Head</h1>

  <div class="w-48 h-48 bg-elevation-16">ABC</div>
  <div class="w-48 h-48 bg-elevation-15">ABC</div>
  <div class="w-48 h-48 bg-elevation-14" />
  <div class="w-48 h-48 bg-elevation-12" />
  <div class="w-48 h-48 bg-elevation-11" />
  <div class="w-48 h-48 bg-elevation-9" />
  <div class="w-48 h-48 bg-elevation-8" />
  <div class="w-48 h-48 bg-elevation-7" />
  <div class="w-48 h-48 bg-elevation-5">ABC</div>
  <div class="w-48 h-48 bg-white opacity-[38%]">ABC</div>
</main>
