import type { PageLoad, RouteParams } from './$types';
import { getPostBySlug } from '$lib/posts';

export const load: PageLoad = ({ url, params, routeId }) => {
  console.log(params.slug);
  const post = getPostBySlug(params.slug);
  console.log(routeId);
  if (post === undefined) {
    return {
      status: 404,
      error: new Error(`Not found: ${url.pathname}`)
    };
  }
  return {
    post
  };
};
