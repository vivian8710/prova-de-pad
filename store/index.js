import { createStore, combineReducers } from 'redux'
import { todos } from './tarefas/reducer'

const reducers = combineReducers({
  todos
})

const store = createStore(reducers)

export { store }