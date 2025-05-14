import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { createTheme, GlobalStyles } from './theme';

interface Commerce7AdminUIProps {
  /**
   * Theme mode for the UI
   * @default 'light'
   */
  mode?: 'light' | 'dark';
  /**
   * Child components to render
   */
  children?: React.ReactNode;
}

const Commerce7AdminUI: React.FC<Commerce7AdminUIProps> = ({
  children,
  mode = 'light'
}) => {
  const theme = createTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export type { Commerce7AdminUIProps };
export default Commerce7AdminUI;
