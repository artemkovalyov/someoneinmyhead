<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import '$lib/styles/app.css';

  let open = false;
  let dark = true;
  $: path = $page.url.pathname; // should be reactive for client side routing
</script>

<Head />

<SideMenu bind:open />

<Header bind:open bind:dark bind:path />

<slot />
