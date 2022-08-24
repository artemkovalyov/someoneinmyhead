<script lang="ts">
  import NavLinks from './NavLinks.svelte';
  export let path: string;
</script>

<div class="sm:flex gap-x-6 hidden text-lg">
  <NavLinks bind:path />
</div>
