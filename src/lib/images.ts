type ImagePath = { default: string };
type ImageModule = Record<string, ImagePath>;
type ImageMap = Map<string, ImagePath>;

const images: ImageModule = import.meta.glob('/src/**/*.{jpg,jpeg,png,gif,pdf}', {
  eager: true
});

const imagesMap: ImageMap = new Map(Object.entries(images));

const getImagesMap = (): ImageMap => imagesMap;
const getImageByPath = (path: string): ImagePath => imagesMap.get(path) || { default: '' };

export { getImagesMap, getImageByPath };
