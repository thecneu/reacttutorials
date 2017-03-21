import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configStore from './utils/configStore';
import App from './App';

const store = configStore()

const Root = () => (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/(:filter)" component={App} />
            </Router>
        </Provider>

);

export default Root;

