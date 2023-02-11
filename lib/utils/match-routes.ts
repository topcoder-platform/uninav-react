export interface NavMenuItem {
  children?: NavMenuItem[]
  url?: string
}


/**
 * Escape string for building a RegExp
 * @param str
 * @returns
 */
export function escapeRegExp(str: string): string {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const getPathname = (url: string) => {
  try {
    return new URL(url).pathname;
  } catch {
    return (url.match(/^[^?#]+/) ?? [])[0] ?? url;
  }
}

const routeMatchesUrl = (url: string, route: NavMenuItem): boolean => {
  const currentLocPathname = getPathname(url);
  const navItemPathname = getPathname(route.url);

  return !!currentLocPathname.match(new RegExp(`^${escapeRegExp(navItemPathname)}\/?$`, 'i'));
}

/**
 * Matches the current route to a navigation menu item
 *  and returns the full trail to the matched route (eg. [parent, matchedRoute])
 * @param navMenu The full navigation menu to be parsed and to search for a matched route
 * @param path Path to match agains
 * @returns
 */
export const matchRoutes = (navMenu: NavMenuItem, path: string): NavMenuItem[] => {

  return (function parseNavMenu(l, { children = [] }) {
    // safe escape if things get out of control
    if (l >= 9) {
      return
    }

    for (let child of children) {
      if (routeMatchesUrl(path, child)) {
        return child;
      }

      const trail = parseNavMenu(l + 1, child);
      if (trail) {
        return [].concat(child, trail);
      }
    }
  })(0, navMenu)
}
