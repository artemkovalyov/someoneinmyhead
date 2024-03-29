export type NavItem = {
  label: string;
  path?: string;
  href?: string;
};

export const siteConfig = {
  siteName: 'Someone In My Head',
  title: 'Someone In My Head',
  description: 'The only one you can not take hostage',
  basePath: 'http://127.0.0.1:5173/',
  postsPerPage: 7,
  tagsPerCard: 3,
  author: 'The Stig',
  readingTimeFactor: 300,
  locale: 'en_US'
};

// Main top menu links
export const navItems = [
  {
    label: 'About',
    path: 'about/'
  },
  {
    label: 'Author',
    path: 'author/'
  }
  // {
  //   label: 'Projects',
  //   path: 'projects'
  // }
];

export const getNavItems = (): Array<NavItem> =>
  navItems.map((item: NavItem) =>
    item.href !== undefined ? item : { ...item, href: `${siteConfig.basePath}${item.path}` }
  );
