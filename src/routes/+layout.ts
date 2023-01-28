import type { PageLoad } from './$types';
import { getImagesMap } from '$lib/images';
import { getPublishedPostsList } from '$lib/posts';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = () => ({
  postsList: getPublishedPostsList(),
  imagesMap: getImagesMap()
});
