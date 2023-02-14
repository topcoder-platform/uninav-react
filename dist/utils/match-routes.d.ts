export interface NavMenuItem {
    children?: NavMenuItem[];
    url?: string;
}
/**
 * Escape string for building a RegExp
 * @param str
 * @returns
 */
export declare function escapeRegExp(str: string): string;
export declare const getPathname: (url: string) => string;
/**
 * Matches the current route to a navigation menu item
 *  and returns the full trail to the matched route (eg. [parent, matchedRoute])
 * @param navMenu The full navigation menu to be parsed and to search for a matched route
 * @param path Path to match agains
 * @returns
 */
export declare const matchRoutes: (navMenu: NavMenuItem, path: string) => NavMenuItem[];
