<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  $: post = data.post;
</script>

<Head title={post?.title} description={post?.description} author={post?.author} />

<svelte:component this={post?.default} />

<!-- Another way to display a component if it comes rendered -->
<!-- <svelte:head>
     {@html post.component.head}
     </svelte:head>

     {@html post.component.html} -->
