<script>
  import { todos } from "../store";

  let newTodo = "";

  function addNewTodo() {
    todos.update((todos) => {
      return [...todos, { id: todos.length, title: newTodo, completed: false }];
    });

    newTodo = "";
  }
</script>

<form on:submit|preventDefault={addNewTodo} class="mb-3">
  <label for="newTodo" class="form-label">New Todo</label>
  <input
    type="text"
    class="form-control"
    id="newTodo"
    placeholder="Make a Todo List"
    bind:value={newTodo}
  />
  <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
</form>
