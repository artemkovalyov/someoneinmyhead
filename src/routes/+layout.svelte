<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import '$lib/styles/app.css';
  import MainContainer from '$lib/components/MainContainer.svelte';
  import { onMount } from 'svelte';
  import ClipboardJS from 'clipboard';

  onMount(async () =>
    new ClipboardJS('.copy-code-btn').on('success', (e) => {
      e.trigger.firstChild.classList.toggle('copied');
      e.trigger.lastChild.classList.toggle('copied');
      let current = window.setTimeout(() => {
        e.trigger.firstChild.classList.toggle('copied');
        e.trigger.lastChild.classList.toggle('copied');
      }, 1000);
      window.clearTimeout(current);
    })
  );
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
