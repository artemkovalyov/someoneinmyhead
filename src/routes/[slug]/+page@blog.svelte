<script lang="ts">
  // import type {PageData} from './$types'
  import Head from '$lib/components/Head.svelte';
  import type { Post } from '$lib/posts';

  export let data;
  export let post: Post = data.post;

  console.log(data);

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
