import { ADD_TODO, DELETE_TODO, GET_TODO } from '../types/todos.types'

const INITIAL_STATE = []


function todosReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case GET_TODO:
      console.log(payload);
      return [...state, ...payload]
    case ADD_TODO:
      console.log(payload);
      return [...state, payload]
    case DELETE_TODO:
      console.log(payload);
      const newState = state.filter((item) => item.id !== payload)
      return [...newState]
    default:
      return state
  }
}

export default todosReducer