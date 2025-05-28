import c7React from '@commerce7/eslint-config/react';

export default [
  {
    ignores: [
      'public',
      'lib',
      '!.storybook',
      'build/',
      'dist/',
      'node_modules/',
      'storybook-static/'
    ]
  },

  ...c7React,

  {
    rules: {}
  }
];
