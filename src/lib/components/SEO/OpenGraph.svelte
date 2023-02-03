<script lang="ts">
  export let parsedPublishedTime = '';
  export let parsedModifiedTime = '';
  export let siteName = '';
  export let type = '';
  export let author = '';
  export let imageLink = '';
  export let imageAlt = '';
  export let description = '';
  export let locale = '';
  export let title = '';
  export let url = '';
  export let section = '';
  export let tags: string[] = [];
</script>

<svelte:head>
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content={locale} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if imageLink !== ''}
    <meta property="og:image" content={imageLink} />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:alt" content={imageAlt} />
  {/if}
  {#if type === 'article'}
    <meta property="article:publisher" content={siteName} />
    <meta property="article:author" content={author} />
    <meta property="article:published_time" content={parsedPublishedTime} />
    <meta property="article:modified_time" content={parsedModifiedTime} />
  {/if}
  {#each tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  {#if section !== ''}
    <meta property="article:section" content={section} />
  {/if}
</svelte:head>
