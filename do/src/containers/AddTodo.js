import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => (
    <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.todo.value))
    }}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
    </form>
);

export default connect()(AddTodo);
