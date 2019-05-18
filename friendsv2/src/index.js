import React from 'react';
import ReactDOM, { Render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

Render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
