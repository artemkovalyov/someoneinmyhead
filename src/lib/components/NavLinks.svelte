<script lang="ts">
  import siteConfig from '$lib/site.config';
  import NavItem from './NavItem.svelte';
  const navItems = siteConfig.navItems;
  export let path: string;
</script>

{#each navItems as nav}
  <span class="text-4xl">
    <NavItem {path} {nav} />
  </span>
{/each}
