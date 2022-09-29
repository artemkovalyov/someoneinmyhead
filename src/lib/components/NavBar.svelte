<script lang="ts">
  import HamburgerMenu from './HamburgerMenu.svelte';
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let open: boolean = false;
  export let dark: boolean = false;
  export let path: string;
</script>

<nav class="flex flex-nowrap p-6 w-full justify-between">
  <Logo />
  <TopMenuLinks bind:path />
  <div class="flex gap-x-5 justify-end">
    <ThemeToggle bind:dark />
    <HamburgerMenu bind:open />
  </div>
</nav>
