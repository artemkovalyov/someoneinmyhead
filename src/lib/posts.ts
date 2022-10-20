import siteConfig from './site.config';

export interface postModuleType {
  default: any;
  metadata: any;
}
// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules: Record<string, postModuleType> = import.meta.glob('../posts/**/*.md', {
  eager: true
});

// Uncoment this if you need a raw content of Markdown blog files
const rawPosts = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true });
const rawContentMap = new Map(
  Object.entries(rawPosts).map(([path, content]) => {
    const text = content.replace(/---[\s\S]*---\n+/g, '');
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
  path: string;
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
  slug: string;
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
    const slug = path?.split('/')?.pop()?.split('.')[0];
    return {
      path, // path to the markdown post file
      slug,
      link: siteConfig.basePath + slug,
      component: post.default,
      ...rawContentMap.get(path),
      ...post?.metadata
    };
  }
);

// return a post by it's slug, if there're doplicated we'll get the one found first
const getPostBySlug = (slug: String): Post => posts.filter((post: Post) => post.slug === slug)[0];
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
