import React from 'react';
import Todo from './Todo';

export default ({todos}) => {
	if (todos) {
		return (
			<ul>
				{todos.map((todo, index) => <Todo key={index}>{todo.text}</Todo>)}
			</ul>	
		)
	} else {
		return null;
	}	
}