import { getImages } from '$lib/images';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    images: getImages()
  };
}
