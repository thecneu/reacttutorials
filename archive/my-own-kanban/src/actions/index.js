import { ADD_ITEM, MOVE_ITEM, ADD_TODO } from '../constants';

let itemId = 4;
export const addItem = (text) => {
	return {
		type: ADD_ITEM,
		id: itemId++,
		text,
		board: 'todo'
	}
}

export const moveItem = (board) => {
	return {
		type: MOVE_ITEM,
		board
	}
}

export const moveNextBoard = (board) => {
	const boards = ['todo', 'progress', 'completed'];
	let boardIndex = boards.indexOf(board);
	++boardIndex;
	if (boardIndex >= boards.length) {
		return moveItem(boards[boardIndex])
	}
}

let todoId = 0;
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: todoId++,
		text,
		completed: false
	}
}