import React from 'react';
import Checklist from './Checklist';

export default class Card extends React.Component {
	state = {
		showDetails: false
	};

  render() {
		const details = this.state.showDetails ? (
			<div className="card-details">
				<p className="card-description">{this.props.description}</p>
					<Checklist tasks={this.props.tasks} />
			</div>
		) : null;
		
    return (
			<div className="card" key={this.props.id}>
				<div className={this.state.showDetails ? "card-title is-open" : "card-title" }
					onClick={() => this.setState({showDetails: !this.state.showDetails})}>
					{this.props.title}
				</div>
				{ details }
			</div>
		);
  }
}
