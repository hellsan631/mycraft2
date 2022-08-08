
import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react';

interface UIProviderProps {
  children: React.ReactNode;
}

export function UIProvider({ children, ...props }: UIProviderProps) {
  const Component = NextUIProvider as React.FunctionComponent<React.PropsWithChildren<UIProviderProps>>
  return (
    <Component {...props}>
      {children}
    </Component>
  )
}