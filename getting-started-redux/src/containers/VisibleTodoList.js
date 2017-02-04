import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const getVisibleTodos = ({todos, visibilityFilter}) => {
  switch(visibilityFilter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = ({todos, onTodoClick}) =>
  <ul>
    {todos.map((todo, i) => 
      <li 
        key={i}
        onClick={() => { onTodoClick(todo.id) }}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
          {todo.text}
      </li>
    )}
</ul>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)