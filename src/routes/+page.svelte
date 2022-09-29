<script>
  import Card from '$lib/components/Card.svelte';

  import { getPostsSortedByDate } from '$lib/posts';
</script>

<main class="mx-5 grid grid-cols-[repeat(auto-fill,_minmax(min(28rem,_100%),_1fr))] gap-5">
  <div class="h-24 bg-elevation-16">ABC</div>
  <div class="bg-elevation-15">ABC</div>
  <div class="bg-elevation-14">ACD</div>
  <div class="bg-elevation-12">aldskjf</div>
  <div class="bg-elevation-11">asldfjk</div>
  <div class="bg-elevation-9">alsdkfj</div>
  <div class="bg-elevation-8">asdlkjf</div>
  <div class="bg-elevation-7">a;lsdkfj</div>
  <div class="bg-elevation-5">yay</div>
  <div class="bg-white opacity-[38%]">ABC</div>
</main>
