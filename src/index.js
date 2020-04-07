import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faPlus, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import configureStore, { history } from './store/configureStore';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

library.add(faBars);
library.add(faTimes);
library.add(faPlus);
library.add(faChevronCircleLeft);

const div = document.createElement('div');
div.style.height = '100%';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.body.appendChild(div),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
