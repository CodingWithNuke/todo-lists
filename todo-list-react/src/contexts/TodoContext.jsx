import React, { useState, createContext } from 'react'

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Make a Todo List in Vue",
      completed: true,
    },
    {
      id: 1,
      title: "Make a Todo List in React",
      completed: true,
    },
    {
      id: 2,
      title: "Make a Todo List in Svelte",
      completed: false,
    },
    {
      id: 3,
      title: "Make a Todo List in Angular",
      completed: false,
    }
  ])

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  )
}