export const item = (state = {}, action) => {
	console.log('item', state, action)
	switch(action.type) {
		case 'ADD_ITEM':
			return {
				id: action.id,
				text: action.text
			}
		default:
			return state;
	}	
}

export const items = (state = [], action) => {
	console.log('items', state, action)
	switch(action.type) {
		case 'ADD_CARD':
			return [
				...state,
				item(undefined, action)
			]
		default:
			return state;
	}	
}