const images = import.meta.glob('./**/*.{jpg,jpeg,png,gif,pdf}', {
  eager: true
});

const imagesMap = new Map(Object.entries(images));

export { imagesMap };
