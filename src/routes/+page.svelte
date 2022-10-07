<script>
  import Card from '$lib/components/Card.svelte';
  import MainGrid from '$lib/components/MainGrid.svelte';

  import { getPostsSortedByDate } from '$lib/posts';
</script>

<MainGrid>
  {#each getPostsSortedByDate() as Post}
    <div class=" h-24 bg-elevation-16">ABC</div>
  {/each}

  <div class="bg-elevation-15">ABC</div>
  <div class="bg-elevation-14">ACD</div>
  <div class="bg-elevation-12">aldskjf</div>
  <div class="bg-elevation-11">asldfjk</div>
  <div class="bg-elevation-9">alsdkfj</div>
  <div class="bg-elevation-8">asdlkjf</div>
  <div class="bg-elevation-7">a;lsdkfj</div>
  <div class="bg-elevation-5">yay</div>
  <div class="h-24 bg-[#ffb785] opacity-[5%]">ABC</div>
  <div class="h-24 bg-[#ffb785] opacity-[8%]">ABC</div>
  <div class="h-24 bg-[#ffb785] opacity-[11%]">ABC</div>
  <div class="h-24 bg-[#ffb785] opacity-[12%]">ABC</div>
  <div class="h-24 bg-[#ffb785] opacity-[14%]">ABC</div>
</MainGrid>
