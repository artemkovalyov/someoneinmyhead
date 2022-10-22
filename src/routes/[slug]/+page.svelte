<script lang="ts">
  export let data;
  $: post = data.post;
</script>

<svelte:component this={post.component} />
