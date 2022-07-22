const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    concatenateModules: false
  },
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve('node_modules')
    })
  ],
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
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
