<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  // import { HashIcon, HeartIcon, CloudIcon, CoffeeIcon } from 'svelte-feather-icons';
  import '$lib/main.css';

  let open: boolean = false;
</script>

<SideMenu bind:open />
<Header bind:open />

<!-- <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg "> -->
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
<!--     <span class="sidebar-tooltip group-hover:scale-100">abc</span> -->
<!--   </div> -->
<!--   <div class="sidebar-icon"> -->
<!--     <CloudIcon /> -->
<!--   </div> -->
<!-- </div> -->

<main class="prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  <slot />
</main>
