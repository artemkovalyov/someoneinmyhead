<script>
  import { blogStore } from '$lib/stores';
  export let { title, description, author, basePath: permalink } = $blogStore.siteConfig;
  export let type = 'website';
  export let imageLink = '';
</script>

<svelte:head>
  <title>{title || $blogStore.siteConfig.title}</title>
  <meta name="description" content={description} />
  <meta name="author" content={author} />

  <meta property="og:title" content={title} />
  <!-- https://ogp.me/#type_article -->
  <meta property="og:type" content={type || 'website'} />
  <meta property="og:url" content={permalink || $blogStore.siteConfig.basePath} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageLink} />

  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- <link rel="stylesheet" href="css/styles.css?v=1.0" /> -->
</svelte:head>
