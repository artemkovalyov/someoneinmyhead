import type { PageLoad } from './$types';
import { getPostsMap } from '$lib/posts';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = () => ({
  posts: getPostsMap()
});
