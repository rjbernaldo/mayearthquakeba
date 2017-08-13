import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = compose()(createStore)(rootReducer, applyMiddleware(thunk));

const Root = ({ routes }) => (
  <Provider store={store}>
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  </Provider>
);

export default Root;
