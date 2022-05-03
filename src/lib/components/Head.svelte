<script>
  import getConfig from '$lib/site.config';

  export let { title = '', description = '', author = '', basePath = '' } = getConfig();
  export let type = 'website';
  export let imageLink = '';
  export let publishedTime = '';
  export let modifiedTime = '';
  export let expirationTime = '';
  export let tags = [];
  export let section = '';

  console.log(publishedTime);
</script>

<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content={description} />
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <meta name="twitter:title" content={title} />
  <meta property="og:title" content={title} />
  <!-- https://ogp.me/#type_article -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={basePath} />
  <meta property="og:description" content={description} />

  {#if imageLink !== ''}
    <meta property="og:image" content={imageLink} />
    <meta property="og:image" content={imageLink} />
  {/if}

  {#if type === 'article'}
    <meta property="article:author" content={author} />
    {#if publishedTime}
      <meta property="article:published_time" content={new Date(publishedTime).toISOString()} />
    {/if}
    {#if modifiedTime !== ''}
      <meta property="article:expiration_time" content={new Date(expirationTime).toISOString()} />
    {/if}
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
    {#if section !== ''}
      <meta property="article:section" content={section} />
    {/if}
  {/if}

  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- <link rel="stylesheet" href="css/styles.css?v=1.0" /> -->
</svelte:head>
