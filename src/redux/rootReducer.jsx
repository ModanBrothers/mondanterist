import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import pin from './modules/pin';
import { reducer as form } from 'redux-form';

// import all of the reducers and combine them with the following function
export default combineReducers({
  counter,
  router,
  form,
  pin
});
