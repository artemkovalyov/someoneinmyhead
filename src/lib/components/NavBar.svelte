<script lang="ts">
  import HamburgerMenu from './HamburgerMenu.svelte';
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import TopMenuLinks from './TopMenuLinks.svelte';

  export let open: boolean = false;
  export let dark: boolean = false;
  export let path: string;
</script>

<nav class="flex flex-nowrap justify-between p-6 w-full">
  <Logo />
  <TopMenuLinks bind:path />
  <div class="flex gap-x-4">
    <ThemeToggle bind:dark />
    <HamburgerMenu bind:open />
  </div>
</nav>
