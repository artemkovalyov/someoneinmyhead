<script lang="ts">
  export let open: boolean = false;
</script>

<aside
  class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg transition-all transform duration-300 ease-in-out {open
    ? 'left-0 origin-left'
    : '-left-full'}"
>
  <nav class="p-12 text-xl">
    <!-- <a class="block" href="about/">About</a> -->
    <!-- <a class="block" href="author/">Author</a> -->
  </nav>
</aside>
