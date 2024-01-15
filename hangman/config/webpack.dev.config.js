const path = require('path');
const html = path.resolve(__dirname, '../src/**/*.html');
const scss = path.resolve(__dirname, '../src/**/*.scss');
const js = path.resolve(__dirname, '../src/**/*.js');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: [html, scss, js],
  },
};
