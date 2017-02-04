import React from 'react';
import Card from './card';

export default class List extends React.Component {
  render() {
    return (
			<section key={this.props.id} className="list">
				<h1>{this.props.title}</h1>
				{this.props.cards.map(card => <Card key={card.id} {...card} />)}
			</section>
		);
  }
}
