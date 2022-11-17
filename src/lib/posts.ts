import { siteConfig } from './site.config';

export interface postModuleType {
  default: any;
  metadata: any;
}
// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules: Record<string, postModuleType> = import.meta.glob('../posts/**/*.md', {
  eager: true
});

// Uncomment this if you need a raw content of Markdown blog files
const rawPosts = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true });
const rawContentMap = new Map(
  Object.entries(rawPosts).map(([path, content]) => {
    const text = content.replace(/---[\s\S]*---\n+/g, ''); // remove the frontmatter
    return [
      path,
      {
        rawPostContet: text,
        readingTime: Math.round(text.length / siteConfig.readingTimeFactor)
      }
    ];
  })
);

export interface Post {
  slug: string; // slug is an ID of the post, it's resolved from a metadata in a frontmatter. Otherwise the file name is used.
  path: string;
  dir: string;
  component: any;
  rawPostContent: string;
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
  link: string;
  tags: Array<string>;
  title: string;
  readingTime: number;
  alt: string;
  uuid: string;
}

// process imported posts data and map into an Array of post objects with semantical structure
const posts: Array<Post> = Object.entries(postModules).map(
  ([path, post]: [string, postModuleType]): Post => {
    // post structure
    const match = path.match(/(?:\.+\/)+([\s\S]+\/)([\s\S]+)(?:\.)/);
    const dir = match[1];
    const slug = match[2];
    return {
      dir, // a directory of the post relative to the root of of the project, usual '/src'. It is used to load additional resources
      slug, // if there's no slug in the metadata, file name will become a slug
      path, // relative path to the markdown post file
      component: post.default,
      ...rawContentMap.get(path),
      ...post?.metadata // values like slug will be overridden from Metadata if present
    };
  }
);

// return a post by it's slug, if there're duplicated we'll get the one found first
const getPostBySlug = (slug: String): Post => posts.sfilter((post: Post) => post.slug === slug)[0];
// const getPostBySlug = (slug: String): Post => posts[0];

// return a post by it's slug
const getPostById = (id: String): Post => posts.filter((post: Post) => post.uuid === id)[0];

const getPosts = (): Array<Post> => posts;

const getPostsSortedByDate = (): Array<Post> =>
  // Sorts the post array by date, earliest first
  posts
    // Map dates to indices for simple sorting
    .map((v, i) => ({
      i,
      v: new Date(v.publishedTime).valueOf()
    }))
    .sort((x, y) => y.v - x.v) // sort resulting array by dates
    .map((v) => posts[v.i]); // return sorted posts by using indices from the sorted dates array

export { getPosts, getPostsSortedByDate, getPostById, getPostBySlug };
