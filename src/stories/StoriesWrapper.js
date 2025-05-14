import { useState } from 'react';
import styled from 'styled-components';

import Card from '../card';
import LineBreak from '../lineBreak';
import Switch from '../switchComponent';
import Commerce7AdminUI from '../ui';

const StoriesWrapper = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { children } = props;

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Commerce7AdminUI mode={isDarkMode ? 'dark' : 'light'}>
      <WrapperStyles>
        <Switch
          checked={isDarkMode}
          onChange={handleChange}
          label="Dark Mode"
        />
        <LineBreak />
        {children}
      </WrapperStyles>
    </Commerce7AdminUI>
  );
};

const WrapperStyles = styled(Card)`
  background-color: ${({ theme }) => theme.c7__ui.backgroundColor};
`;

export default StoriesWrapper;
