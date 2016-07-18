import React from 'react';
import List from './List';

export default class Kanban extends React.Component {

  render() {
    return (
			<main className="app">
				<List id="todo" title="To Do" cards={this.props.cards.filter(card => card.status === 'todo')} />
				<List id="progress" title="In Progress" cards={this.props.cards.filter(card => card.status === 'progress')} />
				<List id="done" title="Done" cards={this.props.cards.filter(card => card.status === 'done')} />
			</main>
		);
  }
}
