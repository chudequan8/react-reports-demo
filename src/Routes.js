import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  H5Page as H5PageView,
  PayReport as PayReportView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/payReport"
      />
      <RouteWithLayout
        component={H5PageView}
        exact
        layout={MainLayout}
        path="/h5Page"
      />
      <RouteWithLayout
        component={PayReportView}
        exact
        layout={MainLayout}
        path="/payReport"
      />
    </Switch>
  );
};

export default Routes;
