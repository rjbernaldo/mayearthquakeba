const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map', // http://blog.teamtreehouse.com/introduction-source-maps
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      // potential improvement: https://github.com/grommet/grommet-standalone#grommet-standalone
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: { includePaths: ['./node_modules', './node_modules/grommet/node_modules'] },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, 'assets/images'),
        loader: 'url-loader?limit=30000&name=assets/images/[name].[ext]', // inline base64 URLs for <=30k images, direct URLs for the rest
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mayearthquakeba',
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
};
