<template>
  <form @submit.prevent="addNewTodo" class="mb-3">
    <label for="newTodo" class="form-label">New Todo</label>
    <input
      type="text"
      class="form-control"
      id="newTodo"
      placeholder="Make a Todo List"
      v-model="newTodo"
    />
    <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoForm",

  setup() {
    const store = useStore();

    const newTodo = ref("");

    function addNewTodo() {
      if (!newTodo.value.trim().length) return;

      store.dispatch("addTodo", {
        id: store.state.todos.length,
        title: newTodo.value,
        completed: false,
      });

      newTodo.value = "";
    }

    return {
      newTodo,
      addNewTodo,
    };
  },
});
</script>