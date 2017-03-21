const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    ...action.data
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.data.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo;
            })

        default:
            return state;
    }
}

export default todos

export const getTodos = (state, filter) => {
    switch(filter) {
        case 'completed':
            return state.filter(todo => todo.completed)

        case 'active':
            return state.filter(todo => !todo.completed)

        default:
            return state
    }
}
