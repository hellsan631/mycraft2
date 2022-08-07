
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProviderProps } from '@nextui-org/react/types/theme/theme-provider';
import { Fragment } from 'react';

interface UIProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export default function UIProvider({ children, ...props }: UIProviderProps) {
  const Component = NextUIProvider as React.FunctionComponent<React.PropsWithChildren<UIProviderProps>>
  return (
    <Component {...props}>
      {children}
    </Component>
  )
}