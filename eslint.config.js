import * as babelParser from '@babel/eslint-parser';
import commerce7React from '@commerce7/eslint-config/react';

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

  ...commerce7React,

  {
    languageOptions: {
      parser: babelParser,
      globals: {
        BigInt: true
      }
    },
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['.storybook/**', '**/*.stories.js']
        }
      ]
    }
  }
];
