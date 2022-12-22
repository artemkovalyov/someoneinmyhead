let image = 'https://picsum.photos/1280/720'; // placeholder image if none was provided

// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules = import.meta.glob('/src/posts/**/*.md', {
  eager: true
}) as Record<string, Post>;

export interface Post {
  default: Object;
  metadata: Metadata;
}

export interface Metadata {
  slug: string; // slug is an ID of the post, it's resolved from a metadata in a frontmatter. Otherwise the file name is used.
  path: string;
  author: string;
  description: string;
  excerpt: string;
  image: string;
  publishedTime: string;
  modifiedTime: string;
  expitationTime: string;
  published: boolean;
  series: string;
  seriesId: string;
  section: string; // Open Graph section
  tags: Array<string>;
  title: string;
  readingTime: string;
  wordsCount: string;
  alt: string;
  uuid: string;
}

// process imported posts data and map into an Array of key/value pairs matching slug to a post
const posts = Object.entries(postModules).map(([path, post]: [string, Post]): [string, Post] => {
  // const match = path.match(/(?:\.+\/)+([\s\S]+\/)([\s\S]+)(?:\.)/); // skips relative path until a named dir found ../../../
  const match = path.match(/([\s\S]+\/)([\s\S]+)(?:\.)/);
  const slug = post.metadata.slug || match![2]; // make filename a slug, it's later overwritten by a slug for the frontmatter if that is provided
  return [
    slug, // if there's no slug in the metadata, file name will become a slug
    post
  ];
});

const sortPostsByDate = (): Array<[string, Post]> =>
  // Sorts the post array by date, earliest first
  posts
    // Map dates to indices for simple sorting
    .map((v: [string, Post], i) => ({
      i,
      v: new Date(v[1].metadata.publishedTime).valueOf()
    }))
    .sort((x, y) => y.v - x.v) // sort resulting array by dates
    .map((v) => posts[v.i]); // return sorted posts by using indices from the sorted dates array

const postsMap = new Map(sortPostsByDate());

const getPostBySlug = (slug: string): Post | undefined => postsMap.get(slug);

// return a post by it's slug
const getPostById = (id: String): [string, Post] =>
  posts.filter((postTuple: [string, Post]) => postTuple[1].metadata.uuid === id)[0];

const getPosts = (): Array<[string, Post]> => posts;
const getPostsMap = () => postsMap;

export { getPosts, getPostById, getPostBySlug, getPostsMap };
