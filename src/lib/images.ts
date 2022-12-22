const files = import.meta.glob('/src/posts/**/*.jpg', {
  eager: true
});

const images = Object.entries(files).map((path, image) => {
  return {
    path,
    image
  };
});

const getImages = () => images;

export { getImages };
