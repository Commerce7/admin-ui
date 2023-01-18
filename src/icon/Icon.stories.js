import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import styled from 'styled-components';

import { Input } from '..';

import Icon from './Icon';
import * as Icons from './icons';

export const basic = () => (
  <>
    <Icon icon="cart" />
  </>
);

basic.story = {
  name: 'Basic'
};

export const variants = () => (
  <>
    <Icon icon="cart" variant="default" />
    <Icon icon="cart" variant="success" />
    <Icon icon="cart" variant="error" />
    <Icon icon="cart" variant="text" />
  </>
);

variants.story = {
  name: 'Variants'
};

export const sizes = () => (
  <>
    <Icon icon="cart" />
    <Icon icon="cart" size={24} />
    <Icon icon="cart" size={48} />
    <br />
    <br />
    <Icon icon="cart" variant="success" />{' '}
    <Icon icon="cart" size={24} variant="success" />
    <Icon icon="cart" size={48} variant="success" />
    <br />
    <br />
    <Icon icon="cart" variant="error" />{' '}
    <Icon icon="cart" size={24} variant="error" />
    <Icon icon="cart" size={48} variant="error" />
    <br />
    <br />
    <Icon icon="cart" variant="text" />{' '}
    <Icon icon="cart" size={24} variant="text" />
    <Icon icon="cart" size={48} variant="text" />
  </>
);

sizes.story = {
  name: 'Sizes'
};

export const onClick = () => (
  <>
    <Icon icon="add" onClick={action('on-click-add')} label="Add to cart" />
    <Icon
      icon="remove"
      onClick={action('on-click-remove')}
      label="Add to cart"
      size={48}
    />
  </>
);

onClick.story = {
  name: 'Click'
};

const IconRow = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.c7__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.c7__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.c7__ui.fontFamily};

  svg {
    margin-right: 10px;
  }
`;

export const List = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const filteredIcons = Object.keys(Icons).filter(
    (iconKey) =>
      iconKey !== '__namedExportsOrder' &&
      iconKey.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Input value={searchText} onChange={handleChange} label="Search" />
      {filteredIcons.map((iconKey) => (
        <IconRow key={iconKey}>
          <Icon icon={iconKey} /> {iconKey}
        </IconRow>
      ))}
    </>
  );
};

List.story = {
  name: 'All Icons'
};

export default {
  title: 'Icon/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "import { Icon } from '@commerce7/admin-ui'"
      }
    }
  }
};
