<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  export let open: boolean;
  export let path: string;
</script>

<header>
  <NavBar bind:open bind:path />
</header>
