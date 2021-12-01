import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from '@react-navigation/native';

type UI = React.ReactElement<any>;

interface CustomRenderOptions extends RenderOptions {
  navigationParams?: {[key: string]: any};
}

const customRender = (
  ui: UI,
  {navigationParams, ...options}: CustomRenderOptions = {
    navigationParams: undefined,
  },
) => {
  const AllTheProviders = ({children}: any) => {
    return <ThemeProvider theme="light">{children}</ThemeProvider>;
  };

  const renderApi = render(ui, {wrapper: AllTheProviders, ...options});

  return renderApi;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
