<script>
  import Card from '$lib/components/Card.svelte';

  import { getPostsSortedByDate } from '$lib/posts';
</script>

<main class="flex justify-start flex-wrap container mx-4 ">
  {#each getPostsSortedByDate() as post}
    <Card />
  {/each}
</main>
