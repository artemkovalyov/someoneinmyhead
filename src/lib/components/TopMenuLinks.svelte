<script lang="ts">
  import NavLinks from './NavLinks.svelte';
  export let path: string;
</script>

<div class="hidden gap-x-5 w-full justify-center items-center mx-5 sm:flex">
  <NavLinks bind:path />
</div>
