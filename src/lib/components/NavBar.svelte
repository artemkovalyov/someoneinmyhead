<script lang="ts">
  import HamburgerMenu from './HamburgerMenu.svelte';
  import Logo from './Logo.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let open: boolean = false;
</script>

<nav class="w-full grid grid-cols-12 p-6">
  <Logo />
  <TopMenuLinks />
  <HamburgerMenu bind:open />
</nav>
