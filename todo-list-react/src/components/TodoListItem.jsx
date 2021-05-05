import React from 'react'

const TodoListItem = ({ todo, onDeleteTodo, onCompleteTodo }) => {

  const deleteTodo = () => {
    onDeleteTodo(todo.id)
  }

  const completeTodo = () => {
    onCompleteTodo(todo.id)
  }

  return (
    <li className="list-group-item d-flex align-items-center">
      <label className="flex-fill">
        <input type="checkbox" className="form-check-input me-1" checked={todo.completed} onChange={completeTodo} />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
    </li>
  )
}

export default TodoListItem
