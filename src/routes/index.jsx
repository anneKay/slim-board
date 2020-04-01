import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../components/App';
import LandingPage from '../components/views/LandingPage';

const routes = (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/test-page" component={App} />
    <Route path="*" component={() => ' 404 NOT FOUND'} />
  </Switch>
);

export default routes;
