<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  export let open: boolean = false;
</script>

<header>
  <NavBar bind:open />
</header>
