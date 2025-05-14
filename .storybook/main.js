const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  },
  staticDirs: ['../static'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: async (config) => {
    // Remove existing MDX rules
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test?.test?.('.mdx')
    );

    // Add MDX support first
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: require.resolve('@storybook/mdx2-csf/loader'),
          options: {
            skipCsf: true
          }
        }
      ]
    });

    // Add support for both JS and TS files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      ]
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react/jsx-runtime': require.resolve('react/jsx-runtime'),
        'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
        react: path.resolve(__dirname, '../node_modules/react')
      }
    };

    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.mdx');

    return config;
  }
};
