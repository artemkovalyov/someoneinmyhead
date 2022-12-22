const files = import.meta.glob('/src/posts/**/*.{jpg,jpeg,png,gif,pdf}', {
  eager: true
});

console.log(files);

const images = new Map(Object.entries(files));

const getImages = () => images;

export { getImages };
