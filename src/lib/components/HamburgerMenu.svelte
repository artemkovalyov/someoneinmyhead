<script lang="ts">
  export let open: boolean;
</script>

<div class="flex items-center">
  <button on:click={() => (open = !open)} aria-pressed={open} tabindex={open ? 0 : -1}>
    <svg
      class="z-20 transform duration-300 ease-in-out {open ? 'scale-[0.9]' : ''}"
      width="32"
      height="24"
    >
      <line
        id="top"
        class="stroke-emphasis-high stroke-2 transform transition duration-500 ease-in-out {open
          ? 'translate-x-[6px] rotate-45'
          : ''}"
        x1="0"
        y1="2"
        x2="32"
        y2="2"
      />
      <line
        id="middle"
        class="stroke-emphasis-high stroke-2 transform transition duration-500 ease-in-out {open
          ? 'opacity-0'
          : ''}"
        x1="0"
        y1="12"
        x2="32"
        y2="12"
      />
      <line
        id="bottom"
        class="stroke-emphasis-high stroke-2 transform transition duration-500 ease-in-out {open
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
