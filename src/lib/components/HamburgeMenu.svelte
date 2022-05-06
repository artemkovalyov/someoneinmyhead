<script lang="ts">
  let isOpen: boolean = false;
  function toggleMenu() {
    isOpen = !isOpen;
    console.log(isOpen);
  }
</script>

<div class="block ">
  <button
    on:click={toggleMenu}
    aria-pressed={isOpen}
    tabindex={isOpen ? 0 : -1}
    class="px-1 py-1 border rounded space-y-1"
  >
    <span
      class="block h-[0.125rem] w-5 bg-gray-600 transform transition duration-500 ease-in-out {isOpen
        ? 'translate-y-1.5 rotate-45'
        : ''}"
    />
    <span
      class="block h-[0.125rem] w-5 bg-gray-600 transform transition duration-500 ease-in-out {isOpen
        ? 'opacity-0'
        : ''}"
    />
    <span
      class="block h-[0.125rem] w-5 bg-gray-600 transform transition duration-500 ease-in-out {isOpen
        ? '-translate-y-1.5 -rotate-45'
        : ''}"
    />
  </button>
</div>
