import { combineReducers } from 'redux';
// import expect from 'expect';
// import deepFreeze from 'deep-freeze';
// import { addTodo, toggleTodo, toggleFilter } from '../actions';

const todo = (state = {}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}

		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;				
			}

			return {
				...state,
				completed: !state.completed
			}	

		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(0, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;

/*
const testAddTodo = () => {
	const currentState = [];
	const nextState = [{
		id: 0,
		text: 'hi',
		completed: false
	}]

	deepFreeze(currentState);

	expect(
		todos(currentState, addTodo('hi'))
	).toEqual(nextState)
}

const testToggleTodo = () => {
	const currentState = [{
		id: 0,
		text: 'hi',
		completed: false
	}]
	const nextState = [{
		id: 0,
		text: 'hi',
		completed: true
	}]

	deepFreeze(currentState);
	deepFreeze(nextState);

	expect(
		todos(currentState, toggleTodo(0))
	).toEqual(nextState)
}

const testSetVisibilityFilter = () => {
	const currentState = 'SHOW_ALL';
	const nextState = 'SHOW_COMPLETE';

	deepFreeze(currentState);

	expect(
		visibilityFilter(currentState, toggleFilter('SHOW_COMPLETE'))
	).toEqual(nextState);
}

testAddTodo();
testToggleTodo();
testSetVisibilityFilter();
console.log('all tests passed!')
*/