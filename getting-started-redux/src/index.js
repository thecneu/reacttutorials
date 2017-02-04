// ^((?!HMR|WDS).)*$
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { saveState, loadState } from './localStorage';

import todoApp from './reducers';
import App from './App';

const initialState = loadState();

const store = createStore(todoApp, initialState,
	window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(() => {
	saveState(store.getState())
})

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
);