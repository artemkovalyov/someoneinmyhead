import type { PageLoad } from './$types';
import { getPostsList, getPostsMap } from '$lib/posts';
import { getImages, getImagesMap } from '$lib/images';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = () => ({
  postsList: getPostsList(),
  imagesMap: getImagesMap()
  // postsMap: getPostsMap()
});
