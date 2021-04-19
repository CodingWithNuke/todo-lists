<template>
  <div class="container py-4">
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
    <TodoList
      :todos="todos"
      @deleteTodo="onDeleteTodo"
      @completeTodo="onCompleteTodo"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",

  components: {
    TodoList,
  },

  setup() {
    const todos = ref([
      {
        id: 0,
        title: "Make a Todo List in Vue",
        completed: true,
      },
      {
        id: 1,
        title: "Make a Todo List in React",
        completed: false,
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
      },
    ]);
    const newTodo = ref("");

    function addNewTodo() {
      if (newTodo.value.trim().length) {
        todos.value = [
          ...todos.value,
          {
            id: todos.value.length++,
            title: newTodo.value,
            completed: false,
          },
        ];

        newTodo.value = "";
      }
    }

    function onDeleteTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id != id);
    }

    function onCompleteTodo(id) {
      const todoIndex = todos.value.findIndex((item) => item.id == id);
      const todo = todos.value[todoIndex];

      todos.value[todoIndex] = { ...todo, completed: !todo.completed };
    }

    return {
      todos,
      onDeleteTodo,
      onCompleteTodo,
      newTodo,
      addNewTodo,
    };
  },
});
</script>