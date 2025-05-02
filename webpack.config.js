const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'build.js',
    libraryTarget: 'commonjs2',
    globalObject: 'this'
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'styled-components': {
        commonjs: 'styled-components',
        commonjs2: 'styled-components',
        amd: 'styled-components'
      }
    },
    nodeExternals({
      allowlist: ['styled-normalize']
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'styled-components': path.resolve(
        __dirname,
        'node_modules/styled-components'
      ),
      'styled-normalize': path.resolve(
        __dirname,
        'node_modules/styled-normalize'
      )
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
