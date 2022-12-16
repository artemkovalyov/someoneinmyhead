<script lang="ts">
  import { navItems } from '$lib/site.config';
  import NavItem from './NavItem.svelte';
  export let path: string;
</script>

{#each navItems as nav}
  <span class="text-4xl">
    <NavItem bind:path {nav} />
  </span>
{/each}
