import type { FC } from 'react';

import { ComponentLoader, type NavComponentProps } from './component-loader';
import { marketingNavItems } from 'universal-navigation/src/lib/config/nav-menu/marketing-nav-items';
import { getPathname, matchRoutes } from './utils/match-routes';

const level2Html = `
<div class="unndeskonly" style="background: #2A2A2A;height:50px;width:100%;"></div>
`;

const level3Html = `
<div class="unndeskonly" style="background: #F4F4F4;height:48px;width:100%;"></div>
`;

const placeholderHtml = (level: number) => `
<nav class="tc-uninav-placeholder" style="background: #0C0C0C; color: #aaa; position: relative; display: flex; align-items: center;"><style>@media (max-width: 767px){.unndeskonly{display: none!important;}}@media (min-width: 768px){.unnmblonly{display: none!important;}}:where(.tc-uninav-placeholder) *{box-sizing: border-box;}</style><div class="unndeskonly" style="max-width: 1440px;padding: 18px 32px;display: flex;align-items: center;flex: 1 1 auto;margin: 0 auto;"><a target="_top" style="color: #aaa;display: flex;margin-right: 48px;flex: 0 0 auto;text-decoration: none;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.svg" alt="Topcoder" style="height: 22px; display: block;"></a><div style="display: flex; align-items: center; gap: 32px; flex: 1 0 auto;"></div></div><div class="unnmblonly"style="align-items: center; display: flex; flex: 1 1 auto; height: 48px; padding: 12px 16px;"><a target="_top" style="color: inherit; display: flex; flex: 0 0 auto; margin: 0px 20px 0px 0px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" class="" alt="Topcoder" style="color: inherit; height: 17px; "></a><div style="color: inherit; display: flex; height: 32px; margin: -4px; width: 32px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/icon-menu.svg" alt="" class="" style="display: block;height: 20px; margin: 6px 4px; width: 24px;"></div></div></nav>
${level >= 1 ? level2Html : ''}
${level >= 2 ? level3Html : ''}
`;

interface MarketingNavProps extends NavComponentProps {
  currentLocation?: string
}

export const MarketingNavigation: FC<MarketingNavProps> = (props) => {
  const url = getPathname(props.currentLocation);
  const matched = [].concat(matchRoutes(marketingNavItems, url)).filter(Boolean);

  return (
    <ComponentLoader
      placeholderHtml={placeholderHtml(matched?.length)}
      type='marketing'
      {...props}
    />
  );
};
