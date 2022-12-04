import { siteConfig } from '$lib/site.config';

export interface postModuleType {
  default: any;
  metadata: any;
}

// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules: Record<string, postModuleType> = import.meta.glob('../../posts/**/*.md', {
  eager: true
});

// Uncomment this if you need a raw content of Markdown blog files
// const rawPosts = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true });
// const rawContentMap = new Map(
//   Object.entries(rawPosts).map(([path, content]) => {
//     const text = content.replace(/---[\s\S]*---\n+/g, ''); // remove the frontmatter
//     return [
//       path,
//       {
//         rawPostContet: text,
//         readingTime: Math.round(text.length / siteConfig.readingTimeFactor)
//       }
//     ];
//   })
// );

export interface Post {
  slug: string; // slug is an ID of the post, it's resolved from a metadata in a frontmatter. Otherwise the file name is used.
  path: string;
  dir: string;
  absolutePath: string;
  component: any;
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
  readingTime: string;
  wordsCount: string;
  alt: string;
  uuid: string;
}

// process imported posts data and map into an Array of post objects with semantic structure
const posts: Array<Post> = Object.entries(postModules).map(
  ([path, post]: [string, postModuleType]): Post => {
    const match = path.match(/(?:\.+\/)+([\s\S]+\/)([\s\S]+)(?:\.)/); // skips relative path until a named dir found ../../../
    // const match = path.match(/([\s\S]+\/)([\s\S]+)(?:\.)/);
    const dir = siteConfig.rootDir + match[1]; // think of the case when root is not an /src folder
    const slug = match[2]; // make filename a slug, it's later overwritten by a slug for the forntmatter if that is provided
    let image = 'https://picsum.photos/1280/720'; // placeholder image if none was provided
    if (post.metadata.image) {
      image = post.metadata.image.startsWith('.')
        ? '/src' + new URL(post.metadata.image, 'file:/' + dir).pathname
        : post.metadata.image;
    }
    console.log(post.metadata);
    return {
      dir, // a directory of the post relative to the root of of the project, usual '/src'. It is used to load additional resources
      slug, // if there's no slug in the metadata, file name will become a slug
      path, // relative path to the markdown post file
      component: post.default.render(),
      // ...rawContentMap.get(path), // get a content of the post to estimate reading time
      ...post?.metadata, // values like slug will be overridden from Metadata if present
      image
    };
  }
);

// return a post by it's slug, if there're duplicated we'll get the one found first
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
