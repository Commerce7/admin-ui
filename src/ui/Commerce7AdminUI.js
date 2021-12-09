import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { createTheme, GlobalStyles } from './theme';

const Commerce7AdminUI = (props) => {
  const { children, mode } = props;
  const theme = createTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Commerce7AdminUI.defaultProps = {
  mode: 'light'
};

Commerce7AdminUI.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark'])
};

export default Commerce7AdminUI;
