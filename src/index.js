import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { history } from './utils/history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
