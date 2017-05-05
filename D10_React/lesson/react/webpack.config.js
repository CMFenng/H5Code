var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname+"/src",
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,  // 不需要处理的文件目录
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname+"/src/",
    filename: "bundle.js"
  }
};