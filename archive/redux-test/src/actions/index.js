import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants'

let todoId = 0;
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: todoId++,
		text,
		completed: false
	}
}

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id	
	}	
}

export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}