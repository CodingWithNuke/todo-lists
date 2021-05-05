import React, { useState, useContext } from 'react'

import { TodoContext } from '../contexts/TodoContext'

const TodoForm = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const addNewTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, { id: todos.length, title: newTodo, completed: false }]);
    setNewTodo('');
  }

  return (
    <form onSubmit={addNewTodo} className="mb-3">
      <label htmlFor="newTodo" className="form-label">New Todo</label>
      <input type="text" className="form-control" id="newTodo" placeholder="Make a Todo List" onChange={handleChange} value={newTodo}/>
      <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
    </form>
  )
}

export default TodoForm
