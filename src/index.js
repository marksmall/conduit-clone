import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import articlesReducer from 'articles/articles.reducer';
import registerServiceWorker from 'registerServiceWorker';

// 1. Setup store to use middleware (thunk) to create API calls.
// 2. Add redux-logger to middleware.
const middleware = [thunk];
middleware.push(createLogger());

let store;
if (process.env.NODE_ENV === 'development') {
  // 1. Add redux dev tools (development mode only).
  // 2. Create store composed of reducers and middleware.
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    articlesReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  // 1. Create store composed of reducers and middleware.
  store = createStore(articlesReducer, applyMiddleware(...middleware));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
