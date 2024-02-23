<script lang="ts">
  import HamburgerMenu from './HamburgerMenu.svelte';
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let open: boolean;
  export let path: string;
</script>

<nav
  class="flex flex-nowrap bg-elevation-1 px-3 py-3 w-full sm:px-7 justify-between border-b-2 border-outline-variant"
>
  <Logo />
  <TopMenuLinks bind:path />
  <div class="flex gap-x-5 justify-end">
    <ThemeToggle />
    <HamburgerMenu bind:open />
  </div>
</nav>
