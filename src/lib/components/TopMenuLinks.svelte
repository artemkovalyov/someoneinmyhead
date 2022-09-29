<script lang="ts">
  import NavLinks from './NavLinks.svelte';
  export let path: string;
</script>

<div class="hidden gap-x-5 w-full justify-end items-start mx-5 sm:flex">
  <NavLinks bind:path />
</div>
