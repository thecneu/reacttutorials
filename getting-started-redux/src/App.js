import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './Footer';

const App = () => 
  <div className="app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />       
  </div>

export default App;