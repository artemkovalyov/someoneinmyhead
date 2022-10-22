import { readable, writable } from 'svelte/store';
import siteConfig from './site.config';

export const theme = writable('dark');
export const config = readable(siteConfig);
