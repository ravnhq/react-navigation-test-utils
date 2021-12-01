import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {DefaultTheme, ThemeProvider} from '@react-navigation/native';

type UI = React.ReactElement<any>;

interface CustomRenderOptions extends RenderOptions {
  navigationParams?: {[key: string]: any};
}

const AllTheProviders = ({children}: any) => {
  return <ThemeProvider value={DefaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: UI, options?: Omit<RenderOptions, 'wrapper'>) => {
  const renderApi = render(ui, {wrapper: AllTheProviders, ...options});

  return renderApi;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
