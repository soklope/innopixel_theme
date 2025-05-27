const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(defaultConfig, {
  entry: {
    'my-custom-block': path.resolve(__dirname, 'blocks/my-custom-block/index.js'),
    'header-inner-block': path.resolve(__dirname, 'blocks/header-inner-block/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
});
