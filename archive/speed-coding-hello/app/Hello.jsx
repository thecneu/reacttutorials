import React from 'react';

export default ({greet, message}) => {
	return (
		<div className="title-shadow">
			{greet} :: {message}
		</div>
	)
}