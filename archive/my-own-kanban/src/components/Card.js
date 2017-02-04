import React from 'react';
import Text from './Text';
import TodoList from './TodoList';

export default ({text, todos}) => 
	<section className="card">
		<Text>{text}</Text>
		<TodoList todos={todos} />
	</section>