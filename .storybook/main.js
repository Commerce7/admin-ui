module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  // {/* we can't use dynamic title in v2 I disabled store v2 to use dynamic title to show  => https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mdx2-upgrade */}
  features: { storyStoreV7: false },
  docs: {
    autodocs: true
  },
  staticDirs: ['../static']
};
