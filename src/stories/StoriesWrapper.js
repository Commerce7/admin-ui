import { useState } from 'react';
import styled from 'styled-components';

import Commerce7AdminUI from '../ui';
import Switch from '../switch';
import LineBreak from '../lineBreak';
import Card from '../card';

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
