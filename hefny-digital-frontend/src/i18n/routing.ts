import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/en'
  }
});
// @ts-nocheck
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);