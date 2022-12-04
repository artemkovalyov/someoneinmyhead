export type NavItem = {
  label: string;
  path?: string;
  href?: string;
};

export const siteConfig = {
  title: 'Someone In My Head',
  description: 'The only one you can not take hostage',
  basePath: 'http://127.0.0.1:5173/',
  postsPerPage: 7,
  tagsPerCard: 3,
  author: 'Artem Kovalov',
  readingTimeFactor: 300,
  rootDir: '/src/'
};

// Main top menu links
export const navItems = [
  {
    label: 'About',
    path: 'about'
  },
  {
    label: 'Author',
    path: 'author'
  },
  {
    label: 'Projects',
    path: 'projects'
  }
];

export const getNavItems = (): Array<NavItem> =>
  navItems.map((item) =>
    item.href !== undefined ? item : { ...item, href: `${siteConfig.basePath}${item.path}` }
  );
