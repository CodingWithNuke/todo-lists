import React, { FormEvent, useState } from "react";

interface Todo {
  _id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  function completeTodo(id: number) {
    const todo = todos.find((todo) => todo._id == id);

    if (todo) {
      todo.completed = !todo.completed;

      setTodos([...todos]);
    }
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo._id != id));
  }

  function onSubmitAddNewTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newTodo.trim().length) {
      setTodos([
        ...todos,
        { _id: todos.length, text: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  }

  return (
    <div className="container p-4">
      <form onSubmit={onSubmitAddNewTodo}>
        <label className="form-label"> New Todo </label>
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onInput={(e) => setNewTodo(e.currentTarget.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Todo
        </button>
      </form>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="list-group-item d-flex align-items-center"
          >
            <label className="flex-fill">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo._id)}
                className="form-check-input me-1"
              />
              {todo.text}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
