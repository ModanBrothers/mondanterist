import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ExploreLayout from './../layouts/ExploreLayout';
import Explore from './../containers/Explore/Explore';

export default (
  <Route path="explore" component={ ExploreLayout }>
    <IndexRoute component={ Explore } />
  </Route>
);
