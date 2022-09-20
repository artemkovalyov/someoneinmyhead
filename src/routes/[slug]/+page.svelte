<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  export let data;

  $: post = data.post;

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

<!-- <div class="text-xl text-red-500">{$page.params.slug}</div> -->
<main class="prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
  <svelte:component this={post.content} />
</main>
