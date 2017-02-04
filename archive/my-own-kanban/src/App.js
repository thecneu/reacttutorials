import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

import Kanban from './components/Kanban';
import AddToDo from './components/AddToDo';
import { items } from './reducers';
import { addItem} from './actions';

const defaultState = {
	items: [{
		id: 1,
		board: 'todo',
		text: 'I need stuff'
	}, {
		id: 2,
		board: 'todo',
		text: '',
		todos: [
			{
				text: 'I need this stuff'
			}, {
				text: 'And this stuff'
			}
		]
	}, {
		id: 3,
		board: 'todo',
		text: 'Yes Yes'
	}]
}

const kanbanApp = combineReducers({
	items
})
const store = createStore(kanbanApp, defaultState);

class App extends Component {
  onAddItem(text) {
  	store.dispatch(addItem(text));
  }

  render() {
  	return (
  		<main className="app">
	    	<Kanban items={defaultState.items} />
	    	<AddToDo onAddItem={this.onAddItem} />		
	    </main>	
  	)    
  }
}

export default App;
