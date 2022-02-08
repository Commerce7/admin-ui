import { action } from '@storybook/addon-actions';
import Breadcrumb from './Breadcrumb';

export const basic = () => {
  const breadcrumbs = [
    { to: 'https://commerce7.com', label: 'Settings' },
    { label: 'Edit' }
  ];

  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

basic.story = {
  name: 'Basic'
};

export const newTabLink = () => {
  const breadcrumbs = [
    { to: 'https://commerce7.com', label: 'Commerce7' },
    { label: 'Live' }
  ];

  return (
    <Breadcrumb
      breadcrumbs={breadcrumbs}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

newTabLink.story = {
  name: 'New Tab'
};

export const onClick = () => {
  const breadcrumbs = [
    { to: 'https://commerce7.com', label: 'Commerce7' },
    { onClick: action('on-click-breadcrumb'), label: 'Click' },
    { label: 'Add' }
  ];

  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

onClick.story = {
  name: 'Click'
};

export default {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: "import { Breadcrumb } from '@commerce7/admin-ui'"
      }
    }
  }
};
