<script>
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import '$lib/main.css';

  const title = $page.params.slug;
</script>

<Head {title} />

<slot />
