export type NavItem = {
  label: string;
  path?: string;
  href?: string;
};

const siteConfig = {
  title: 'Someone In My Head',
  description: 'My Blog description, yay!',
  basePath: 'http://127.0.0.1:5174',
  postsPerPage: 7,
  author: 'Artem Kovalov',
  // Main top menu links
  navItems: [
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
    },
    {
      label: 'ABC',
      path: 'abc'
    },
    {
      label: 'ART',
      path: 'art'
    },
    {
      label: 'CDA',
      path: 'cda'
    }
  ]
};

export const getNavItems = (): Array<NavItem> =>
  siteConfig.navItems.map((item) =>
    item.href !== undefined ? item : { ...item, href: `${siteConfig.basePath}/${item.path}` }
  );

export default siteConfig;
