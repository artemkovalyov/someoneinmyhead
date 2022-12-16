<script lang="ts">
  import type { NavItem } from '$lib/site.config';
  export let path: string;
  const href = path.slice(1, path.length);
  export let nav: NavItem;
  console.log(href);
  console.log(nav.href);
  $: current = href === nav.path;
</script>

<!-- This will not reload the page but use client side navigation to update only changed components  -->
<!-- <a data-sveltekit-reload href={nav.href || nav.path} class:current class="menulink"> -->
<a href={`/${nav.href || nav.path}`} class:current class="menulink">
  {nav.label}
</a>

<style>
  .menulink {
    @apply mt-1 px-2 pb-1 relative;
  }

  .menulink::before {
    @apply border-primary absolute content-[''] border-r-2 border-t-2 w-0 h-0 top-0 left-0 invisible;
  }
  .menulink::after {
    @apply border-primary absolute content-[''] border-b-2 border-l-2 w-0 h-0 bottom-0 right-0 invisible;
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
