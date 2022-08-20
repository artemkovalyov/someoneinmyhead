import type { PageLoad, RouteParams } from './$types';
import { getPostBySlug } from '$lib/posts';

export const load: PageLoad = ({ params, url }: { params: RouteParams; url: URL }) => {
  const post = getPostBySlug(params.slug);
  console.log(params);
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
