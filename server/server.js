require('dotenv').config();

const koa = require('koa');
const serve = require('koa-static');
const router = require('./middleware/api/routes');
const cloudinary = require('cloudinary');
const historyApiFallback = require('koa-connect-history-api-fallback');

const app = koa();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('./middleware/dev-middleware');
  app.use(devMiddleware.webpackDevMiddleware(webpackConfig, compiler));
  app.use(devMiddleware.webpackHotMiddleware(compiler));
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(router.routes());
app.use(historyApiFallback());
app.use(serve(`${__dirname}/../dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');// eslint-disable-line no-console
