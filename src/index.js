import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import allReducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"

const store = createStore( 
  allReducers,
  compose(applyMiddleware(thunk), composeWithDevTools())
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);