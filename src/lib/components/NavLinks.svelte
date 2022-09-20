<script lang="ts">
  import { getNavItems } from '$lib/site.config';
  import siteConfig from '$lib/site.config';
  import NavItem from './NavItem.svelte';
  // const navItems = getNavItems();
  const navItems = siteConfig.navItems;
  export let path: string;
</script>

{#each navItems as nav}
  <NavItem {path} {nav} />
{/each}
