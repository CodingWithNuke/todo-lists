<script>
  import TodoListItem from "./TodoListItem.svelte";

  import { todos } from "../store";

  function deleteTodo(event) {
    const id = event.detail;
    todos.update((todos) => todos.filter((todo) => todo.id != id));
  }

  function completeTodo(event) {
    const id = event.detail;
    todos.update((todos) => {
      const todo = todos.find((todo) => todo.id == id);
      todo.completed = !todo.completed;

      return [...todos];
    });
  }
</script>

<ul class="list-group">
  {#each $todos as todo}
    <TodoListItem
      {todo}
      on:deleteTodo={deleteTodo}
      on:completeTodo={completeTodo}
    />
  {/each}
</ul>
