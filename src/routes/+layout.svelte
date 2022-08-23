<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import '$lib/styles/app.css';

  let open: boolean = false;
  let dark: boolean = true;
</script>

<!-- Import prism theme depending on the dark/light site theme -->
<svelte:head>
  {#if dark}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-dark.min.css"
      type="text/css"
      media="screen"
    />
  {:else}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-light.min.css"
      type="text/css"
      media="screen"
    />
  {/if}
</svelte:head>
<!-- End of theme prism switch -->

<SideMenu bind:open />
<Header bind:open bind:dark />

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

<!-- <main class="text-gray-600 bg-white dark:text-gray-400 dark:bg-gray-900"> -->
<slot />
<!-- </main> -->
