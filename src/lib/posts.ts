let image = 'https://picsum.photos/1280/720'; // placeholder image if none was provided

// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules = import.meta.glob('/src/posts/**/*.md', {
  eager: true
}) as Record<string, PostModule>;

export interface PostModule {
  default: Object;
  metadata: Post;
}

export interface Post {
  slug?: string; // slug is an ID of the post, it's resolved from a metadata in a frontmatter. Otherwise the file name is used.
  path?: string;
  dir?: string;
  image?: string;
  default?: Object;
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
    // const match = path.match(/(?:\.+\/)+([\s\S]+\/)([\s\S]+)(?:\.)/); // skips relative path until a named dir found ../../../
    const match = path.match(/([\s\S]+\/)([\s\S]+)(?:\.)/);
    const dir = match![1]; // make filename a slug, it's later overwritten by a slug for the frontmatter if that is provided
    const slug = match![2]; // make filename a slug, it's later overwritten by a slug for the frontmatter if that is provided
    post.metadata.tags = post.metadata.tags.map((tag) => tag.toLowerCase());
    return {
      slug,
      path,
      dir,
      default: post.default,
      ...post.metadata
    }; // if there's no slug in the metadata, file name will become a slug
  })
  .sort((x, y) => new Date(y.publishedTime).valueOf() - new Date(x.publishedTime).valueOf());

const postsMap = new Map(postsList.map((post) => [post.slug, post]));

const getPostBySlug = (slug: string): Post | undefined => postsMap.get(slug);

const getPostsList = () => postsList;
const getPublishedPostsList = () => postsList.filter((post) => post.published);
const getPostsMap = () => postsMap;

export { getPostsList, getPostsMap, getPostBySlug, getPublishedPostsList };
