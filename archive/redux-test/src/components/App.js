import React, { Component } from 'react';
import AddTodo from './AddTodo';
import FooterLinks from './FooterLinks';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <main>
        <AddTodo />
        <TodoList />
        <FooterLinks />
      </main>
    );
  }
}

export default App;
