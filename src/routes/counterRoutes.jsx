import React from 'react';
import { Route, IndexRoute } from 'react-router';


import HelloRoutes from '../containers/Hello/HelloRoutes';
import CounterView from './../containers/Counter/counterView';
import CounterLayout from './../layouts/CounterLayout';

export default (
  <Route path="counter" component= { CounterLayout } >
    <IndexRoute component={ CounterView } />
    <Route path="hello" component={ HelloRoutes } />
  </Route>
);
