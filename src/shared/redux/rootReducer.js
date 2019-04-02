import { combineReducers } from 'redux'
// Reducer
import todos from './reducers/todos.reducer'

const ROOT_REDUCER = combineReducers({
  todos
})

export default ROOT_REDUCER