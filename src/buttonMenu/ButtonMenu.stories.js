import { action } from '@storybook/addon-actions';

import ButtonMenu from '.';

const { ButtonMenuItem } = ButtonMenu;

export const Basic = () => (
  <ButtonMenu>
    <ButtonMenuItem icon="export" onClick={action('clicked')}>
      Export
    </ButtonMenuItem>
    <ButtonMenuItem icon="trash" onClick={action('clicked')}>
      Delete
    </ButtonMenuItem>
  </ButtonMenu>
);

Basic.story = {
  name: 'Basic'
};

export const Variants = () => (
  <>
    <ButtonMenu>
      <ButtonMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ButtonMenuItem>
    </ButtonMenu>{' '}
    <ButtonMenu variant="primary">
      <ButtonMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ButtonMenuItem>
      <ButtonMenuItem icon="trash" onClick={action('clicked')}>
        Delete
      </ButtonMenuItem>
    </ButtonMenu>
  </>
);

Variants.story = {
  name: 'Variants'
};

export const Size = () => (
  <>
    <ButtonMenu>
      <ButtonMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ButtonMenuItem>
    </ButtonMenu>{' '}
    <ButtonMenu size="small">
      <ButtonMenuItem icon="export" onClick={action('clicked')}>
        Export
      </ButtonMenuItem>
      <ButtonMenuItem icon="trash" onClick={action('clicked')}>
        Delete
      </ButtonMenuItem>
    </ButtonMenu>
  </>
);

Size.story = {
  name: 'Size'
};

export const Disabled = () => (
  <>
    <ButtonMenu disabled>
      <ButtonMenuItem icon="export" onClick={action('clicked')} disabled>
        Export
      </ButtonMenuItem>
    </ButtonMenu>
  </>
);

Disabled.story = {
  name: 'Disabled'
};

const description = `
import { ButtonMenu } from '@commerce7/admin-ui'<br/><br/>const { ButtonMenuItem } = ButtonMenu
`;

export default {
  title: 'Button/ButtonMenu',
  component: ButtonMenu,
  subComponents: { ButtonMenuItem },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
