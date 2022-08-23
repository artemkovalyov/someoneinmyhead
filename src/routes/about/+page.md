# Big

## Smaller

Wow

```ts
const postModules = import.meta.globEager('../posts/**/*.md');

export interface Post {
  path: string;
  content: Object;
  author: string;
  description: string;
  image: string;
  publishedTime: string;
  modifiedTime: string;
  expitationTime: string;
  published: boolean;
  series: string;
  seriesId: string;
  section: string; // Open Graph section
  slug: string;
  tags: Array<string>;
  title: string;
  uuid: string;
}

// process imported posts data and map into an Array of post objects with semantical structure
const posts: Array<Post> = Object.entries(postModules).map(
  ([path, post]): Post =>
    // post structure
    ({
      path, // path to the markdown post file
      slug: path.split('/').pop().split('.')[0],
      content: post.default, // actual markdown to reneder
      ...post.metadata
    })
);


```
