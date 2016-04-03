const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfiguration = {
  devtool: 'eval',
  entry: [
    'bootstrap-loader',
    'tether',
    path.resolve(ROOT_PATH, 'src/main.jsx')
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'src')
    }],
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
        loader: 'imports?jQuery=jquery'
      }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassResources: './src/assets/App.scss',
  postcss: [autoprefixer],
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      'window.Tether': 'tether'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'development') {
  const webpackHMR = new webpack.HotModuleReplacementPlugin();
  webpackConfiguration.plugins.push(webpackHMR);
  webpackConfiguration.entry.push('webpack-hot-middleware/client');
}

if (process.env.NODE_ENV === 'production') {
  const webpackNoErrors = new webpack.NoErrorsPlugin();
  webpackConfiguration.plugins.push(
    webpackNoErrors
  );
}


module.exports = webpackConfiguration;
