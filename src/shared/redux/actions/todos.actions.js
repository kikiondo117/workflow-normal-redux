import { ADD_TODO, DELETE_TODO, GET_TODO } from '../types/todos.types'

export async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos = await res.json()
  const payload = todos
  return {
    type: GET_TODO,
    payload
  }
}
export async function addTodo(body) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
  const todos = await res.json()
  const payload = todos
  return {
    type: ADD_TODO,
    payload
  }
}

export async function deleteTodo(todo) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
  return {
    type: DELETE_TODO,
    payload: todo
  }
}