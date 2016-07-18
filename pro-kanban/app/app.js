import React from 'react';

import Kanban from './components/Kanban';

let cardsList = [
	{
		id: 1,
		title: "Read the Book",
		description: "I should read the whole book",
		status: "progress",
		tasks: []
	},
	{
		id: 2,
		title: "Write some code",
		description: "Code along with the samples in the book",
		status: "todo",
		tasks: [{
			id: 1,
			name: "ContactList Example",
			done: true
		}, {
			id: 2,
			name: "Kanban Example",
			done: false
		}, {
			id: 3,
			name: "My own experiments",
			done: false
		}]
	},
];

export default class App extends React.Component {

	render() {
		return (
			<Kanban cards={cardsList} />
		);
		/*
		3 Lists
		Header
		Title
		Add
		Status #s

		Lists
		Card
		Title
		Description
		TaskList
		Checkbox
		Label
		Add Task

		*/
	}
}
