import type { FC } from 'react';

import { ComponentLoader, type NavComponentProps } from './component-loader';

const placeholderHtml = (toolName: string) => `
<nav class="tc-uninav-placeholder" style="background: #0C0C0C; color: #aaa; position: relative; display: flex; align-items: center;"><style>@media (max-width: 767px){.unndeskonly{display: none!important;}}@media (min-width: 768px){.unnmblonly{display: none!important;}}:where(.tc-uninav-placeholder) *{box-sizing: border-box;}</style><div class="unndeskonly" style="padding: 18px 32px;max-width: 1440px;display: flex;align-items: center;flex: 1 1 auto;margin: 0 auto;"><a style="text-decoration:none;display: flex;margin-right: 48px;flex: 0 0 auto;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" alt="Topcoder" style="display: block;height: 22px;"></a><div style="position:relative;background:#767676;width:2px;height:60px;margin:-18px 0;z-index:1;"><span style="display:flex;align-items:center;justify-content:center;width:25px;height:25px;border:1px solid #767676;border-radius:25px;background:#2A2A2A;transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.334413 8.26569C0.0219931 7.95327 0.0219931 7.44673 0.334413 7.13432L2.96873 4.5L0.334412 1.86569C0.0219928 1.55327 0.0219928 1.04673 0.334412 0.734315C0.646832 0.421895 1.15336 0.421895 1.46578 0.734315L4.66578 3.93431C4.9782 4.24673 4.9782 4.75327 4.66578 5.06569L1.46578 8.26569C1.15336 8.57811 0.646832 8.5781 0.334413 8.26569Z" fill="white"></path></svg></span></div><div style="background:#0C0C0C;width:100%;padding:18px 48px;margin:-18px 0;max-height:100%;display:flex;align-items:center;"><a style="color:#82eacf;text-decoration:none;font-family: Barlow Condensed,BarlowCondensed;font-style:normal;font-weight:500;font-size:20px;line-height:24px;text-transform:uppercase;">${toolName}</a></div></div><div class="unnmblonly" style="align-items: center; display: flex; flex: 1 1 auto; height: 48px; padding: 12px 16px;"><a target="_top" style="color: inherit; display: flex; flex: 0 0 auto; margin: 0px 20px 0px 0px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" class="" alt="Topcoder" style="color: inherit; height: 17px; "></a><div style="color: inherit; display: flex; height: 32px; margin: -4px; width: 32px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/icon-menu.svg" alt="" class="" style="display: block;height: 20px; margin: 6px 4px; width: 24px;"></div></div></nav>
`;

export const ToolNavigation: FC<NavComponentProps> = (props) => {

  return (
    <ComponentLoader
      placeholderHtml={placeholderHtml(props.toolName)}
      type='tool'
      {...props}
    />
  );
};
