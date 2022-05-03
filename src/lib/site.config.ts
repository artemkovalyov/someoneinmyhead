interface Config {
  title: string;
  description: string;
  theme?: Object;
  basePath?: string;
  postsPerPage: number;
  author: string;
  navbar: Array<Navbar>;
}

interface Navbar {
  label: string;
  href?: string;
  path?: string;
}

export default (): Config => {
  return {
    title: 'Someone In My Head',
    description: 'My Blog description, yay!',
    basePath: 'http://localhost:3000',
    postsPerPage: 7,
    author: 'Artem Kovalov',
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
