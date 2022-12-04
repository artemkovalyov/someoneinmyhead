import { getPostBySlug } from '$lib/server/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
  const post = getPostBySlug(params.slug);
  if (post === undefined) {
    return {
      status: 404,
      error: new Error(`Not found: ${url.pathname}`)
    };
  }
  // console.log(post);
  return {
    post
  };
}
