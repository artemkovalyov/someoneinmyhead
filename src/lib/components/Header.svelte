<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  export let open: boolean = false;
  export let dark: boolean = false;
</script>

<header>
  <NavBar bind:open bind:dark />
</header>
