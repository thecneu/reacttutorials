import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const todos = [
  {id: 1, text: 'Learn Redux', completed: false}
]

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer />
      </div>
    );
  }
}

export default App;
