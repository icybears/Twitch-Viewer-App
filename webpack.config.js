const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader'] }
    ]
  },
 plugins:[
     new HtmlWebpackPlugin({
         template: './app/index.html'
     })
 ]
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
        new webpack.optimize.UglifyJsPlugin()
     )
}

module.exports = config;