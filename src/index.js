import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore( 
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);