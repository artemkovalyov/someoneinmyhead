<script>
  import { posts } from '$lib/store';
  import { Md } from './Md.md';
</script>

<svelte:component this={Md} />
<p>{$posts.art}</p>
