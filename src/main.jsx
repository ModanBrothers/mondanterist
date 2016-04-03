import 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/routes';
import configureStore from './redux/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});

const app = document.getElementById('App');
ReactDOM.render(<App store={store} history={history} routes={routes} />, app);
