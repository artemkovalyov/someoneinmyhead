<script context="module">
  import { getPostBySlug } from '$lib/posts';

  /** @type {import('./[slug]@blog').Load} */
  export function load({ params, url }) {
    const post = getPostBySlug(params.slug);
    console.log(params);
    if (post === undefined) {
      return {
        status: 404,
        error: new Error(`Not found: ${url.pathname}`)
      };
    }
    return {
      props: {
        post
      }
    };
  }
</script>

<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import type { Post } from '$lib/posts';

  export let post: Post;

  const meta = {
    type: 'article',
    title: post?.title,
    imageLink: post?.image,
    author: post?.author,
    tags: post?.tags,
    section: post?.section, // add other article metadata like og:image, etc. to the article metadata
    publishedTime: post?.publishedTime,
    modifiedTime: post?.modifiedTime,
    description: post?.description
  };
</script>

<Head {...meta} />

<svelte:component this={post.content} />
