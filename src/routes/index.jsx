import React from 'react';
import { Route, Switch } from 'react-router';
import App from "../components/App";

const routes = (
  <Switch>
    <Route exact path="/test-page" component={App} />
    <Route path="*" component={() => ' 404 NOT FOUND'} />
  </Switch>
);

export default routes;