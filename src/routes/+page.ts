import { getImages } from '$lib/images';

export function load() {
  return {
    images: getImages()
  };
}
