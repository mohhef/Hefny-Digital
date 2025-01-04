import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/en', // Default locale redirect
    '/home': '/', // Redirect /home to /
    '/en/home': '/en', // Redirect /en/home to /en
    '/ar/home': '/ar', // Redirect /ar/home to /ar
    }
});
// @ts-nocheck
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);