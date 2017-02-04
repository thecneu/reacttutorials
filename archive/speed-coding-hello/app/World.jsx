import React from 'react';
import Hello from './Hello';

export default class World extends React.Component {
	state = {
		greet: 'Hello',
		message: 'World'
	};

	onChange = (e) => {
		console.log(e.currentTarget.value);
		console.log('hi fredddy');
	}

	render() {
		return (
			<main>
				<input type="text" placeholder="message..." onChange={this.onChange} />
				<Hello greet={this.state.greet} message={this.state.message} />
			</main>
		)		
	}
}