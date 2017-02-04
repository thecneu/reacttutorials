import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import World from './World';

ReactDOM.render(
	<World />,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept()
}