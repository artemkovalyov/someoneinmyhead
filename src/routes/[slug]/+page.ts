import type { PageLoad } from './$types';
import { getPostBySlug } from '$lib/posts';

export const load: PageLoad = ({ url, params }) => {
  const post = getPostBySlug(params.slug);
  if (post === undefined) {
    return {
      status: 404,
      error: new Error(`Not found: ${url.pathname}`)
    };
  }
  console.log(post);
  return {
    post
  };
};
