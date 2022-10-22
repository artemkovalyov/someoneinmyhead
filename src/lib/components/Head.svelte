<script lang="ts">
  import siteConfig from '$lib/site.config';

  export let { title = '', description = '', author = '', basePath = '' } = siteConfig;
  export let type = 'website';
  export let imageLink = '';
  export let publishedTime = '';
  export let modifiedTime = '';
  export let expirationTime = '';
  export let tags: string[] = [];
  export let section = '';
  export let dark: boolean;
</script>

<svelte:head>
  <title>{title}</title>
  <!-- https://ogp.me/#type_article -->
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <meta name="referrer" content="no-referrer-when-downgrade" />

  <meta property="og:site_name" content={siteConfig.title} />
  <meta property="og:type" content={type} />
  <!-- website -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={basePath} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={basePath} />
  <meta name="twitter:site" content="" />

  {#if imageLink !== ''}
    <meta property="og:image" content={imageLink} />
    <meta property="og:image:width" content="2000" />
    <meta property="og:image:height" content="1400" />
    <meta name="twitter:image" content={imageLink} />
  {/if}

  <meta property="article:publisher" content={author} />
  {#if type === 'article'}
    <meta property="article:author" content={author} />
    {#if publishedTime}
      <meta property="article:published_time" content={new Date(publishedTime).toISOString()} />
    {/if}
    {#if modifiedTime}
      <meta property="article:modified_time" content={new Date(modifiedTime).toISOString()} />
    {/if}
    {#if expirationTime !== ''}
      <meta property="article:expiration_time" content={new Date(expirationTime).toISOString()} />
    {/if}
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
    {#if section !== ''}
      <meta property="article:section" content={section} />
    {/if}
  {/if}

  {#if dark}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-dark.min.css"
      type="text/css"
      media="screen"
    />
  {:else}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-light.min.css"
      type="text/css"
      media="screen"
    />
  {/if}

  <!-- <link rel="icon" href="/favicon.ico" />
       <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
       <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> -->

  <!-- <link rel="stylesheet" href="css/styles.css?v=1.0" /> -->
</svelte:head>
