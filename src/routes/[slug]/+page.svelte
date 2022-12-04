<script lang="ts">
  export let data;
  $: post = data.post;
</script>

<!-- <svelte:component this={post.component} /> -->

<svelte:head>
  {@html post.component.head}
</svelte:head>

{@html post.component.html}
