import uuid from 'uuid';

const addTodo = (text) => ({
    type: 'ADD_TODO',
    data: {
        id: uuid.v4(),
        text,
        completed: false
    }
})

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    data: {
        id
    }
})

export { addTodo, toggleTodo }
