import { getPostBySlug } from '$lib/posts';
import type { PageLoad } from './$types';

export const load = (({ url, params }) => {
  const post = getPostBySlug(params.slug);
  if (post === undefined) {
    return {
      status: 404,
      error: new Error(`Not found: ${url.pathname}`)
    };
  }
  return {
    post
  };
}) satisfies PageLoad;
