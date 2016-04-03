import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = null;
  const middleware = applyMiddleware(ReduxThunk, promiseMiddleware);
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

  createStoreWithMiddleware = compose(middleware, devTools);

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
    );
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
