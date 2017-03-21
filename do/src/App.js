import React from 'react';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import Footer from './containers/Footer';

const App = () => (
  <div className="app">
    <h1>Do: A todo list</h1>
    <TodoList />
    <AddTodo />
    <Footer />
  </div>
)

export default App;
