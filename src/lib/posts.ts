import type { SvelteComponent } from 'svelte';

// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules = import.meta.glob('/src/posts/**/*.md', {
  eager: true
}) as Record<string, PostModule>;

export interface PostModule {
  default: typeof SvelteComponent;
  metadata: Post;
}

export interface Post {
  slug?: string; // slug is an ID of the post, it's resolved from a metadata in a frontmatter. Otherwise the file name is used.
  path?: string;
  dir?: string;
  image?: string;
  default?: typeof SvelteComponent;
  title: string;
  author: string;
  description: string;
  excerpt: string;
  publishedTime: string;
  modifiedTime: string;
  expitationTime?: string;
  published: boolean;
  series: string;
  seriesId: string;
  section: string; // Open Graph section
  tags: Array<string>;
  readingTime: string;
  wordsCount: string;
  alt: string;
  uuid: string;
}

// process imported posts data and map into an Array of key/value pairs matching slug to a post
const postsList = Object.entries(postModules)
  .map(([path, post]: [string, PostModule]): Post => {
    const match = path.match(/([\s\S]+\/)([\s\S]+)(?:\.)/);
    // make filename a slug, it's later overwritten by a slug for the frontmatter if that is provided
    const dir = match![1];
    // make filename a slug, it's later overwritten by a slug for the frontmatter if that is provided
    const slug = match![2];
    // make tags lower case for ease of using array.includes as a filter
    // console.log(post.metadata);
    post.metadata.tags = post.metadata?.tags.map((tag) => tag.toLowerCase());
    return {
      slug,
      path,
      dir,
      default: post.default,
      ...post.metadata
    }; // if there's no slug in the metadata, file name will become a slug
  })
  // sort posts by time ascending
  .sort((x, y) => new Date(y.publishedTime).valueOf() - new Date(x.publishedTime).valueOf());

// for a quick fetch of posts when navigating
const postsMap = new Map(postsList.map((post) => [post.slug, post]));
const getPostBySlug = (slug: string): Post | undefined => postsMap.get(slug);
// full posts list
const getPostsList = () => postsList;
// get only published posts to simplify templates
const getPublishedPostsList = () => postsList.filter((post) => post.published);
const getPostsMap = () => postsMap;

export { getPostsList, getPostsMap, getPostBySlug, getPublishedPostsList };
