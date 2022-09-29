<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  export let open: boolean;
  export let dark: boolean;
  export let path: string;
</script>

<header>
  <NavBar bind:open bind:dark bind:path />
</header>
