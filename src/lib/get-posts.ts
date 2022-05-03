// directly import all the blog posts from the file system thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
const postModules = import.meta.globEager('../posts/**/*');

interface Metadata {
  author: string;
  date: Date;
  description: string;
  image: string;
  publishAt: Date;
  published: boolean;
  series: string;
  seriesId: string;
  slug: string;
  tags: Array<string>;
  title: string;
  uuid: string;
}

interface Posts {
  path: string;
  metadata: Metadata;
  content: Object;
}

// process imported posts data and map into an Array of post objects with semantical structure
const Posts Array<Posts> =>
  Object.entries(postModules).map(([path, post]): Posts => {
    // collect and augment the metadata
    const metadata = {
      date: new Date(post.metadata.date),
      publishAt: new Date(post.metadata.publishAt),
      ...post.metadata
    };
    // markdown data to render with `mdsvex`
    const content = post.default;

    // post structure
    return {
      path, // path to the markdown post file
      metadata, // metadata collected from the frontmatter
      content // actual markdown to reneder
    };
  });
