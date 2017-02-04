import React from 'react';
import List from './List';

export default ({items}) => {
	return (
		<div className="kanban">	
			<List key={0} items={items.filter(item => item.board === 'todo')}>To Do</List>
			<List key={1} items={items.filter(item => item.board === 'progress')}>In Progress</List>
			<List key={2} items={items.filter(item => item.board === 'completed')}>Completed</List>
		</div>									
	)
}