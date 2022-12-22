<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: post = data.post;
</script>

<svelte:component this={post.default} />

<!-- Another way to display a component if it comes rendered -->
<!-- <svelte:head>
     {@html post.component.head}
     </svelte:head>

     {@html post.component.html} -->
