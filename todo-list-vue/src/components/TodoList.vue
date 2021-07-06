<template>
  <div class="container p-4">
    <form @submit.prevent="onSubmitAddNewTodo">
      <label class="form-label"> New Todo </label>
      <input type="text" class="form-control" v-model="newTodo" />
      <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
    </form>
    <ul class="list-group mt-3">
      <li
        v-for="todo in todos"
        :key="todo._id"
        class="list-group-item d-flex align-items-center"
      >
        <label class="flex-fill">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="completeTodo(todo._id)"
            class="form-check-input me-1"
          />
          {{ todo.text }}
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo._id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Todo {
  _id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  setup() {
    const todos = ref<Todo[]>([]);
    const newTodo = ref<string>("");

    function completeTodo(id: number) {
      const todo = todos.value.find((todo) => todo._id == id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }

    function deleteTodo(id: number) {
      todos.value = todos.value.filter((todo) => todo._id != id);
    }

    function onSubmitAddNewTodo() {
      if (newTodo.value.trim().length) {
        todos.value.push({
          _id: todos.value.length,
          text: newTodo.value,
          completed: false,
        });

        newTodo.value = null;
      }
    }

    return {
      todos,
      newTodo,

      onSubmitAddNewTodo,

      completeTodo,
      deleteTodo,
    };
  },
});
</script>