<script lang="ts">
  import type { NavItem } from '$lib/site.config';

  export let path: string;
  export let nav: NavItem;
  $: current = path === `/${nav.path}`;
  console.log(path);
</script>

<!-- Use this for full page reload on every navigation -->
<!-- <a sveltekit:reload href={nav.href || `${nav.path}`} class:current class="menulink"> -->

<!-- This will not reload the page but use client side navigation to update only changed components  -->
<a href={nav.href || `${nav.path}`} class:current class="menulink">
  {nav.label}
</a>

<style>
  .menulink {
    @apply mt-1 px-2 pb-1 relative  dark:text-emphasis-high before:border-primary-light before:absolute before:content-[''] before:border-r-2 before:border-t-2  before:w-0 before:h-0 before:top-0 before:left-0 before:invisible after:border-primary-light after:absolute after:content-[''] after:border-b-2 after:border-l-2 after:w-0 after:h-0 after:bottom-0 after:right-0 after:invisible;
  }

  .menulink:hover::before {
    width: 100%;
    height: 100%;
    visibility: visible;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  .menulink:hover::after {
    width: 100%;
    height: 100%;
    visibility: visible;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  .current::before,
  .current::after {
    width: 100%;
    height: 100%;
    visibility: visible;
  }
</style>
