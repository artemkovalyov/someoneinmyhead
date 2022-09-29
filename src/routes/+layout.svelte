<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import '$lib/styles/app.css';

  let open = false;
  let dark = true;
  let path = $page.url.pathname;
</script>

<!-- pass dark to figure out the code highlight theme -->
<Head bind:dark />

<SideMenu bind:open />

<Header bind:open bind:dark bind:path />

<!-- <div class="flex fixed top-0 left-0 flex-col m-0 w-16 h-screen text-white bg-gray-900 shadow-lg"> -->
<!--   <div class="sidebar-icon"> -->
<!--     <HashIcon /> -->
<!--   </div> -->
<!--   <div class="sidebar-icon"> -->
<!--     <HeartIcon /> -->
<!--   </div> -->
<!--   <div class="sidebar-icon"> -->
<!--     <CloudIcon /> -->
<!--   </div> -->
<!--   <div class="sidebar-icon group"> -->
<!--     <CoffeeIcon /> -->
<!--     <span class="group-hover:scale-100 sidebar-tooltip">abc</span> -->
<!--   </div> -->
<!--   <div class="sidebar-icon"> -->
<!--     <CloudIcon /> -->
<!--   </div> -->
<!-- </div> -->

<slot />
