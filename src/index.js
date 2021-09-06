import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import blogReducer from './reducers/blogReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"

const initialState = {}
const store = createStore(blogReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);