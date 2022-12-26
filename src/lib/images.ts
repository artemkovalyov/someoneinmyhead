/// <reference types="vite/client" />
type ImagePath = { default: string };
type ImageModule = Record<string, ImagePath>;
type ImageMap = Map<string, ImagePath>;
const images: ImageModule = import.meta.glob('/src/posts/**/*.{jpg,jpeg,png,gif,pdf}', {
  eager: true
});
let image = 'https://picsum.photos/1280/720'; // placeholder image if none was provided
const imagesMap: ImageMap = new Map(Object.entries(images));

const getImagesMap = (): ImageMap => imagesMap;
const getImageByPath = (path: string): ImagePath => imagesMap.get(path) || { default: image };

export { getImagesMap, getImageByPath };
