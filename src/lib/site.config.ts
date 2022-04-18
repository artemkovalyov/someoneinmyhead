interface Config {
  title: string;
  description: string;
  theme?: Object;
  basePath?: string;
  postsPerPage: number;
  navbar: Array<Object>;
}

export default (): Config => {
  return {
    title: 'My blog, yay!',
    description: 'My Blog description, yay!',
    basePath: 'http://localhost:3000',
    postsPerPage: 7,
    // Main top menu links
    navbar: [
      {
        label: 'Google',
        href: 'http://google.com'
      },
      {
        label: 'About',
        path: 'about'
      },
      {
        label: 'Author',
        path: 'author'
      }
    ]
  };
};
