import type { FC } from 'react';

import { ComponentLoader, type NavComponentProps } from './component-loader';

const placeholderHtml = (year: string) => `
  <footer style="background: #0C0C0C;color: #d4d4d4;"><div style="max-width: 1440px;margin: 0 auto;display: flex;align-items: center;padding: 12px 32px;"><span style="font-family: Roboto;font-style: normal;font-weight: 400;font-size: 14px;line-height: 24px;">© ${year} Topcoder</span><div style="display: flex;align-items: center;gap: 8px;margin-left:auto;"><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.facebook.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-fb.svg" alt="Facebook"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.youtube.com/channel/UCFv29ANLT2FQmtvS9DRixNA" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-yt.svg" alt="YouTube"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.linkedin.com/company/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-ln.svg" alt="LinkedIn"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://twitter.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-tw.svg" alt="Twitter"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.instagram.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-insta.svg"alt="Instagram"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://discord.com/invite/topcoder?ref=navb" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-discord.svg" alt="Discord"></a></span></div></div></footer>
`;

export const FooterNavigation: FC<NavComponentProps> = (props) => {

  return (
    <ComponentLoader
      placeholderHtml={placeholderHtml(`${(new Date).getFullYear()}`)}
      type='footer'
      {...props}
    />
  );
};
