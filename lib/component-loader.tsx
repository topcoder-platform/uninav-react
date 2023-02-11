import { type FC, type ReactNode, useEffect, useRef } from 'react';

import type { NavigationAppProps, TcUniNavFn } from 'universal-navigation/types/src/main';
import loadUninavLib from './load-uninav-lib'

declare let tcUniNav: TcUniNavFn

export interface NavComponentProps extends NavigationAppProps {
  uniNavUrl: string
}

export interface ComponentLoaderProps extends NavComponentProps {
  placeholderHtml: string
}

export const ComponentLoader: FC<ComponentLoaderProps> = ({
  placeholderHtml,
  uniNavUrl,
  ...props
}) => {

  const loadedLib = useRef(false);
  const initialized = useRef(false);
  const elRef = useRef<HTMLDivElement>();
  const elUuid = useRef(`${Date.now()}-${Math.random()}`)

  if (!loadedLib.current && typeof window !== 'undefined') {
    loadedLib.current = true;
    loadUninavLib(uniNavUrl);
  }

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    const placeholderEls = [].slice.call(elRef.current.children);
    tcUniNav('init', elUuid.current, { type: props.type, onReady(...args) {
      placeholderEls.forEach(el => el.remove());
      props.onReady?.(...args);
    } });
  }, [props.type, props.onReady])

  useEffect(() => {
    if (!initialized.current) {
      return;
    }

    tcUniNav('update', elUuid.current, {...props});
  }, [
    props.type,
    props.toolName,
    props.toolRoot,
    props.fullFooter,
    props.handleNavigation,
    props.onReady,
    props.user,
    props.signIn,
    props.signUp,
    props.signOut,
    props.supportMeta,
  ]);

  const placeholder = initialized.current ? '' : (placeholderHtml ?? '');

  return (
    <div
      id={elUuid.current}
      ref={elRef}
      dangerouslySetInnerHTML={{ __html: placeholder }}
    />
  )
}
