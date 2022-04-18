import { readable } from 'svelte/store';
import getPosts from './get-posts';
import getConfig from './site.config';

export const blogStore = readable({
  siteConfig: getConfig(),
  posts: getPosts()
});
