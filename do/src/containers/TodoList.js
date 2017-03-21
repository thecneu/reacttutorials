import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getTodos } from '../reducers';
import ListItem from '../components/ListItem';

const TodoList = ({todos, todoClick}) => (
    <ul>
        {todos.map(todo => <ListItem key={todo.id} {...todo} todoClick={todoClick} />)}
    </ul>
);

const mapStateToProps = (state, {params}) => ({
    todos: getTodos(state, params.filter || 'all')
})

export default withRouter(connect(
    mapStateToProps,
    { todoClick: toggleTodo }
)(TodoList));
