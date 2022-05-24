<script lang="ts">
  import HamburgeMenu from './HamburgeMenu.svelte';
  import Logo from './Logo.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let sidebar: boolean = false;
</script>

<nav class="w-full flex p-6">
  <Logo />
  <TopMenuLinks />
  <HamburgeMenu bind:isOpen={sidebar} />
</nav>
