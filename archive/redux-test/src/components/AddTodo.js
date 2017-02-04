import React from 'react';

export default () => 
<form onSubmit={e => {
	e.preventDefault();
}}>
	<input type="text"/>
	<button type="submit">Add</button>
</form>