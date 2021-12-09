import Avatar from '.';

export const Basic = () => <Avatar label="JH" />;

Basic.story = {
  name: 'Basic'
};

export const Sizes = () => (
  <>
    <Avatar
      imageSrc="https://randomuser.me/api/portraits/women/1.jpg"
      imageAlt="Woman Profile"
      size="tiny"
      label="JH"
    />
    <Avatar
      imageSrc="https://randomuser.me/api/portraits/women/3.jpg"
      imageAlt="Woman Profile"
      size="small"
      label="JH"
    />
    <Avatar
      imageSrc="https://randomuser.me/api/portraits/men/4.jpg"
      imageAlt="Man Profile"
      size="default"
      label="JH"
    />
    <Avatar
      imageSrc="https://randomuser.me/api/portraits/women/2.jpg"
      imageAlt="Woman Profile"
      size="large"
      label="JH"
    />
  </>
);

Sizes.story = {
  name: 'Sizes'
};

export const Image = () => (
  <Avatar
    imageSrc="https://randomuser.me/api/portraits/women/6.jpg"
    imageAlt="Woman Profile"
    label="JH"
  />
);

Image.story = {
  name: 'Image'
};

export default {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "import { Avatar } from '@commerce7/admin-ui'"
      }
    }
  }
};
