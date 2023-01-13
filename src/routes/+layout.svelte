<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import '$lib/styles/app.css';
  import MainContainer from '$lib/components/MainContainer.svelte';

  export const data = {}; // data property from layout is available in all the child layouts and pages that use this layout
  let open = false;
  let dark = true;
  $: path = $page.url.pathname; // should be reactive for client side routing
  $: slug = $page.params.slug;
</script>

<!-- <Head /> -->

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
</svelte:head>

<SideMenu bind:open />

<Header bind:open bind:dark bind:path />

<MainContainer>
  <slot />
</MainContainer>
