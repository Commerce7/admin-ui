import Picture from '.';

export const Basic = () => (
  <>
    <Picture
      src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg"
      alt="Wine"
    />
    <Picture
      src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg"
      alt="Wine"
      height={300}
    />
    <Picture
      src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg"
      alt="Wine"
      height={200}
    />
  </>
);

Basic.story = {
  name: 'Basic'
};

export const ModernFormats = () => (
  <>
    <Picture
      src={{
        src: 'https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg',
        avif: 'https://images.development.commerce7.com/a-v1-app/images/screenshot/thumb/wine-pour-1659034629425.avif'
      }}
      alt="Wine"
      height={100}
    />
    <Picture
      src={{
        webp: 'https://cdn.libre-software.net/wp-content/uploads/sites/3/AVIF/AVIF%20Test%20picture%20-%20WebP%20fallback%20image.webp'
      }}
      alt="Wine"
      height={100}
    />
  </>
);

ModernFormats.story = {
  name: 'ModernFormats'
};

export default {
  title: 'UI/Picture',
  component: Picture,
  parameters: {
    docs: {
      description: {
        component: "import { Picture } from '@commerce7/admin-ui'"
      }
    }
  }
};
