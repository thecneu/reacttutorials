import React from 'react';

let input;
export default ({onAddItem}) => (
	<footer>
		<form onSubmit={e => {			
			e.preventDefault();
			onAddItem(input.value);
		}}>
			<input type="text" ref={node => input = node} placeholder="Add Item" />
			<button type="submit">Add</button>
		</form>				
	</footer>	
)