import React from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import { TodoProvider } from './contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div class="container py-4">
        <TodoForm/>
        <TodoList/>
      </div>
    </TodoProvider>
  )
}

export default App
