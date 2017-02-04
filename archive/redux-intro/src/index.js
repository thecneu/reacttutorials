import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { todos, visibilityFilter } from './reducers';

import App from './App';
import './index.css';

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

const store = createStore(todoApp)
store.subscribe(render);
render();

function render() {
	ReactDOM.render(
	  <App {...store.getState()} store={store} />,
	  document.getElementById('root')
	);
}