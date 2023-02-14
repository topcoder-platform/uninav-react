import { type FC } from 'react';
import type { NavigationAppProps } from 'universal-navigation/types/src/main';
export interface NavComponentProps extends NavigationAppProps {
    uniNavUrl: string;
}
export interface ComponentLoaderProps extends NavComponentProps {
    placeholderHtml: string;
}
export declare const ComponentLoader: FC<ComponentLoaderProps>;
