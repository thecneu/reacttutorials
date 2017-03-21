import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer, { getImages } from './reducers'
import Gallery from './components/Gallery';
import logo from './logo.svg';
import './App.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

store.dispatch(getImages())

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Provider store={store}>
          <Gallery />
        </Provider>
      </div>
    );
  }
}

export default App;
