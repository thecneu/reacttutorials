import React, { Component } from 'react';
import { ADD_TODO, TOGGLE_TODO } from './action-types';

let todoID = 0;
class App extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={node => {
          this.input = node
        }} />
        <button onClick={() => {
          this.props.store.dispatch({
            type: ADD_TODO,
            id: ++todoID,
            text: this.input.value 
          })
          this.input.value = '';
        }}>
          Add
        </button>
        
        <ul>
          {this.props.todos.map(todo => 
            <li 
              key={todo.id}
              onClick={() => {
                this.props.store.dispatch({
                  type: TOGGLE_TODO,
                  id: todo.id
                })
              }}
              style={
                { textDecoration: todo.completed ? 'line-through' : 'none' }
              }
              >
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
