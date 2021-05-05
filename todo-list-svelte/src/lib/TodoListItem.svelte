<script>
  export let todo;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function deleteTodo() {
    dispatch("deleteTodo", todo.id);
  }

  function completeTodo() {
    dispatch("completeTodo", todo.id);
  }
</script>

<li class="list-group-item d-flex align-items-center">
  <label class="flex-fill">
    <input
      checked={todo.completed}
      on:change={completeTodo}
      class="form-check-input me-1"
      type="checkbox"
    />
    {todo.title}
  </label>
  <button class="btn btn-danger" on:click={deleteTodo}>Delete</button>
</li>
