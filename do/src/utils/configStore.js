import { createStore } from 'redux';
import { saveData, loadData } from './localStorage';
import todoApp from '../reducers';

const initialState = {
    todos: [
        {
          id: 1,
          text: 'Vaccum',
          completed: false
        }, {
          id: 2,
          text: 'Call Drew',
          completed: false
        }, {
          id: 3,
          text: 'Write out task lists',
          completed: false
        }
    ]
}

const configStore = () => {
    const store = createStore(todoApp, loadData() || initialState)
    console.log(store.getState())
    store.subscribe(() => saveData({todos: store.getState().todos}))

    return store
}

export default configStore
