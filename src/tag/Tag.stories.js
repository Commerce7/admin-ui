import { action } from '@storybook/addon-actions';

import Tag from '.';

export const basic = () => (
  <>
    <Tag variant="default">Default</Tag>
    <Tag variant="info">Info</Tag>
    <Tag variant="warning">Warning</Tag>
    <Tag variant="error">Error</Tag>
    <Tag variant="success">Success</Tag>
  </>
);

basic.story = {
  name: 'Basic'
};

export const withClick = () => (
  <>
    <Tag variant="default" onClick={action('click')}>
      Default
    </Tag>
    <Tag variant="info" onClick={action('click')}>
      Info
    </Tag>
    <Tag variant="warning" onClick={action('click')}>
      Warning
    </Tag>
    <Tag variant="error" onClick={action('click')}>
      Error
    </Tag>
    <Tag variant="success" onClick={action('click')}>
      Success
    </Tag>
  </>
);

withClick.story = {
  name: 'Click'
};

export const withDelete = () => (
  <>
    <Tag variant="default" onDelete={action('delete click')}>
      Default
    </Tag>
    <Tag variant="info" onDelete={action('delete click')}>
      Info
    </Tag>
    <Tag variant="warning" onDelete={action('delete click')}>
      Warning
    </Tag>
    <Tag variant="error" onDelete={action('delete click')}>
      Error
    </Tag>
    <Tag variant="success" onDelete={action('delete click')}>
      Success
    </Tag>
  </>
);

withDelete.story = {
  name: 'Delete'
};

export default {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: "import { Tag } from '@commerce7/admin-ui'"
      }
    }
  }
};
