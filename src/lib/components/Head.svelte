<script lang="ts">
  import { siteConfig } from '$lib/site.config';
  import OpenGraph from './SEO/OpenGraph.svelte';
  import { page } from '$app/stores';

  export let {
    title = '',
    description = '',
    author = '',
    basePath = '',
    locale = 'en_US',
    siteName = ''
  } = siteConfig;
  export let type = 'website';
  export let imageLink = '';
  export let imageAlt = '';
  export let publishedTime = '';
  export let modifiedTime = '';
  export let expirationTime = '';
  export let tags: string[] = [];
  export let section = '';

  const parsedPublishedTime = new Date(publishedTime).toISOString();
  const parsedModifiedTime = new Date(modifiedTime).toISOString();

  $: url = $page.url.href; // should be reactive for client side routing
</script>

<OpenGraph
  {siteName}
  {title}
  {parsedPublishedTime}
  {parsedModifiedTime}
  {type}
  {description}
  {url}
  {imageLink}
  {imageAlt}
  {section}
  {tags}
/>

<svelte:head>
  <title>{title}</title>
  <!-- https://ogp.me/#type_article -->
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <meta name="referrer" content="no-referrer-when-downgrade" />

  <meta property="og:site_name" content={siteConfig.title} />
  <meta property="og:type" content={type} />
  <!-- website -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={basePath} />
  <meta name="twitter:site" content="" />

  <!-- <link rel="icon" href="/favicon.ico" />
       <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
       <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> -->

  <!-- <link rel="stylesheet" href="css/styles.css?v=1.0" /> -->
</svelte:head>
