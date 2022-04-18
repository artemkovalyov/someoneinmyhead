// directly import all the blog posts thanks to Vite's feature: https://vitejs.dev/guide/features.html#glob-import
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

export default (): Array<Posts> =>
  Object.entries(postModules).map(([path, post]): Posts => {
    const metadata = {
      ...post.metadata,
      date: new Date(post.metadata.date),
      publishAt: new Date(post.metadata.publishAt)
    };

    const content = post.default;

    return {
      path,
      metadata,
      content
    };
  });
