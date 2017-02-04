import React from 'react';

export default ({tasks}) => {
	const list = tasks.map(task => (
		<li key={task.id}>
			<label>
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}
			</label>			
		</li>
	));

	return (
		<ul>
			{list}
		</ul>
	);
}
