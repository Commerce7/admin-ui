const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    concatenateModules: false
  },
  externals: [
    nodeExternals({
      modulesDir: path.resolve('node_modules'),
      allowlist: [
        'styled-normalize',
        /^styled-components/,
        /.*styled-normalize.*/
      ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      'styled-normalize': path.resolve(
        __dirname,
        'node_modules/styled-normalize'
      )
    }
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
