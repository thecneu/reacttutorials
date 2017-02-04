import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SET_VISIBILITY_FILTER } from './action-types';

export function todo(state = {}, action) {
	switch(action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case TOGGLE_TODO:
			if (action.id !== state.id) {
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

export function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			]
		case TOGGLE_TODO:
			return state.map(t => todo(t, action))
		default:
			return state;
	}	
}

export function visibilityFilter(state = SHOW_ALL, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.visibilityFilter;
		default:
			return state;
	}	
}