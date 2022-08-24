import type { PageData, RouteParams } from './$types';

export const load = ({ url }: { url: URL }): PageData => ({
  path: url.pathname
});
