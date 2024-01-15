const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, '../src/js/app'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
