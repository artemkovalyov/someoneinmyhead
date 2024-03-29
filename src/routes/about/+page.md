<script>
</script>

# Big ABC!!!

I'm on the newline
Me as well
And this is a new line

![arty](/src/routes/about/pattern.jpg)

# How to use XXX

### I'm a header on a new line

:::info{title="Default XKB configuration" #default-xkb-configuration}

Most of the Linux distributions ship a default XKB configuration that leaves you with only the most popular modifiers like <kbd>Alt</kbd>, <kbd>Enter</kbd>, <kbd>Super</kbd>, <kbd>Ctrl</kbd>, and <kbd>Shift</kbd>. They are usually mapped to respective keys on your keyboard. <kbd>Super</kbd> is most frequently mapped to <kbd>Win</kbd> key on the most laptops I've used.

:::

### abc

if you chose xxx, you should also use yyy somewhere…

alkdfj

alksjf

alksjf

alskjdf

aslkfja

::::

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

## Smaller

<kbd class="key">Wow</kbd> wow wow

```ts
const postModules = import.meta.globEager('../posts/**/*.md');

// Comment

// Another Comment

export interface Post {
  //~~
  path: string;
  content: Object;
  //>~~
  author: string;
  description: string;
  excerpt: string;
  //<~~
  image: string;
  publishedTime: string;
  modifiedTime: string;
  expitationTime: string;
  //>--
  published: boolean;
  series: string;
  seriesId: string;
  section: string; // Open Graph section
  slug: string;
  //<--
  //~~
  tags: Array<string>;
  title: string;
  uuid: string;
}

// process imported posts data and map into an Array of post objects with semantical structure

// ae

//bw

const posts: Array<Post> = Object.entries(postModules).map(
  ([path, post]): Post =>
    // post structure
    ({
      path, // path to the markdown post file
      //>++
      slug: path.split('/').pop().split('.')[0],
      //~~
      content: post.default, // actual markdown to reneder
      //<++
      ...post.metadata
    })
);
```

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done
