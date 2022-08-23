<script lang="ts">
  import HamburgerMenu from './HamburgerMenu.svelte';
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let open: boolean = false;
  export let dark: boolean = false;
</script>

<nav class="grid grid-cols-12 p-6 w-full">
  <Logo />
  <TopMenuLinks />
  <ThemeToggle bind:dark />
  <HamburgerMenu bind:open />
</nav>
