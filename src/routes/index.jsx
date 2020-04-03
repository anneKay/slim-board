import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import App from '../components/App';
import LandingPage from '../components/views/LandingPage';
import { registerForm, loginForm } from '../components/form/fields';
const AuthenticationForm = lazy(() => import('../components/form/AuthForm'));

const routes = (
  <Suspense fallback={<div>Loading ...</div>}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/test-page" component={App} />
      <Route
        exact
        path="/signup"
        render={() => (
          <AuthenticationForm
            action="register"
            formTitle="Registration"
            buttonText="Signin"
            formStructure={registerForm}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <AuthenticationForm
            action="login"
            formTitle="Login"
            buttonText="Login"
            formStructure={loginForm}
          />
        )}
      />
      <Route path="*" component={() => ' 404 NOT FOUND'} />
    </Switch>
  </Suspense>
);

export default routes;
