import React from 'react';
import Card from './card';

export default class List extends React.Component {
  render() {
    return (
        <section className="list">
            <h1>{ this.props.title }</h1>
            { this.props.cards.map(card => <Card card={card}></Card>) }
        </section>
    );
  }
}