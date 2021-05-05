import React, { useContext } from 'react'

import TodoListItem from './TodoListItem'

import { TodoContext } from '../contexts/TodoContext'

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const completeTodo = (id) => {
    const todo = todos.find(todo => todo.id == id);
    todo.completed = !todo.completed;

    setTodos([...todos])
  }

  return (
    <ul className="list-group">
      {
        todos.length ? todos.map(todo => <TodoListItem key={todo.id} todo={todo} onDeleteTodo={deleteTodo} onCompleteTodo={completeTodo}/>) : <i>No todos to display</i>
      }
    </ul>
  )
}

export default TodoList
