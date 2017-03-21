import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
    todos
})

export default todoApp

export const getTodos = (state, filter) => fromTodos.getTodos(
    state.todos,
    filter
)
