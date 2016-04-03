import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from './../layouts/CoreLayout';
import LandingView from './../containers/Landing/LandingView';

import counterRoutes from './counterRoutes';
import exploreRoutes from './exploreRoutes';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={LandingView} />
    { counterRoutes }
    { exploreRoutes }
    <Redirect from="*" to="/" />
  </Route>
);
