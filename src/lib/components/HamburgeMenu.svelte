<script lang="ts">
  let isOpen: boolean = false;
</script>

<div class="block md:hidden">
  <button on:click={() => (isOpen = !isOpen)} aria-pressed={isOpen} tabindex={isOpen ? 0 : -1}>
    <svg
      class="z-20 transform duration-300 ease-in-out {isOpen ? 'scale-[0.9]' : ''}"
      width="32"
      height="24"
    >
      <line
        id="top"
        class="stroke-gray-600 stroke-2 transform transition duration-500 ease-in-out {isOpen
          ? 'translate-x-[6px] rotate-45'
          : ''}"
        x1="0"
        y1="2"
        x2="32"
        y2="2"
      />
      <line
        id="middle"
        class="stroke-gray-600 stroke-2 transform transition duration-500 ease-in-out {isOpen
          ? 'opacity-0'
          : ''}"
        x1="0"
        y1="12"
        x2="32"
        y2="12"
      />
      <line
        id="bottom"
        class="stroke-gray-600 stroke-2 transform transition duration-500 ease-in-out {isOpen
          ? '-translate-x-[12px] translate-y-[9px] -rotate-45'
          : ''}"
        x1="0"
        y1="22"
        x2="32"
        y2="22"
      />
    </svg>
  </button>
</div>
