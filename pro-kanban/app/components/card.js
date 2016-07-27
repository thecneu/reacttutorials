import React from 'react';
import Checklist from './checklist';

export default class Card extends React.Component {
  render() {
    const card = this.props.card;
    console.log(card.tasks.length);
    return (
      <div className="card">
        <div className="card-title">{ card.title }</div>
        <div className="card-details">
            <p>{ card.description }</p>
            { card.tasks.length ? <Checklist list={card.tasks} /> : null }
        </div>
      </div>
    );
  }
}
