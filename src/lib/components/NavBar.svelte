<script lang="ts">
  import NavLinks from './NavLinks.svelte';
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <span class="font-semibold text-xl tracking-tight">Someone In My Head</span>
  </div>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
    >
      <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
      >
    </button>
  </div>
  <NavLinks />
</nav>
