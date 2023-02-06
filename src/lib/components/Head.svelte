<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { siteConfig } from '$lib/site.config';
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
  export let tags: string[] = [];
  export let section = '';

  const parsedPublishedTime = new Date(publishedTime).toISOString();
  const parsedModifiedTime = new Date(modifiedTime).toISOString();

  $: url = $page.url.href; // should be reactive for client side routing
</script>

<MetaTags
  {title}
  {description}
  canonical={basePath}
  openGraph={{
    url,
    title,
    description,
    images: [
      {
        url: imageLink,
        width: 1920,
        height: 1080,
        alt: imageAlt
      }
    ],
    type,
    article: {
      publishedTime: parsedPublishedTime,
      modifiedTime: parsedModifiedTime,
      authors: [author],
      section,
      tags
    },
    site_name: siteName
  }}
  additionalLinkTags={[
    {
      rel: 'icon',
      href: 'http://localhost/favicon.ico'
    }
  ]}
/>
