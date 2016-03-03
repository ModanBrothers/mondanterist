const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfiguration = {
  devtool: 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'src/main.js')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'app/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Modanterist'
    })
  ]
};

if (process.env.NODE_ENV === 'development') {
  webpackConfiguration.module.preLoaders = [
    {
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'src')
    }];
  const webpackHMR = new webpack.HotModuleReplacementPlugin();
  const webpackNoErrors = new webpack.NoErrorsPlugin();
  webpackConfiguration.plugins.push(
    webpackHMR,
    webpackNoErrors
    );
  webpackConfiguration.entry.push('webpack-hot-middleware/client');
}

if (process.env.NODE_ENV === 'production') {
  const webpackUgify = new webpack.optimize.UglifyJsPlugin({
    noerr: true
  });
  webpackConfiguration.plugins.push(webpackUgify);
}


module.exports = webpackConfiguration;
