<script lang="ts">
  interface Todo {
    _id: number;
    text: string;
    completed: boolean;
  }

  let todos: Todo[] = [];
  let newTodo = "";

  function completeTodo(id: number) {
    const todo = todos.find((todo) => todo._id == id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  function deleteTodo(id: number) {
    todos = todos.filter((todo) => todo._id != id);
  }

  function onSubmitAddNewTodo() {
    if (newTodo.trim().length) {
      todos = [
        ...todos,
        {
          _id: todos.length,
          text: newTodo,
          completed: false,
        },
      ];

      newTodo = "";
    }
  }
</script>

<div class="container p-4">
  <form on:submit|preventDefault={onSubmitAddNewTodo}>
    <label class="form-label">New Todo</label>
    <input type="text" class="form-control" bind:value={newTodo} />
    <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
  </form>
  <ul class="list-group mt-3">
    {#each todos as todo}
      <li class="list-group-item d-flex align-items-center">
        <label class="flex-fill">
          <input
            type="checkbox"
            checked={todo.completed}
            on:change={() => completeTodo(todo._id)}
            class="form-check-input me-1"
          />
          {todo.text}
        </label>
        <button class="btn btn-danger" on:click={() => deleteTodo(todo._id)}>
          Delete
        </button>
      </li>
    {/each}
  </ul>
</div>
