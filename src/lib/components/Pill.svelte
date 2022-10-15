<!-- Renders a Pill. If you pass Link prop it becomes a Pill wih a link. -->
<script lang="ts">
  export let link = '';
</script>

{#if link === ''}
  <span
    class="py-1 px-2 bg-surface-variant text-on-surface-variant border border-outline rounded-full"
  >
    <slot />
  </span>
{:else}
  <a href={link}>
    <span
      class="py-1 px-2 bg-surface-variant text-on-surface-variant border border-outline rounded-full"
    >
      <slot />
    </span>
  </a>
{/if}
