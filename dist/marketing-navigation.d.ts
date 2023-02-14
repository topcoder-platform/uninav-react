import type { FC } from 'react';
import { type NavComponentProps } from './component-loader';
interface MarketingNavProps extends NavComponentProps {
    currentLocation?: string;
}
export declare const MarketingNavigation: FC<MarketingNavProps>;
export {};
